import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task: Task | null = null;
  interval: any = null;
  saveInterval: any = null;

  constructor(private httpClient: HttpClient, private taskService: TaskService) { }

  ngOnInit(): void {}

  timerStart() {
    this.interval = setInterval(() => {
      this.task!!.timer++;
    }, 1000);
    this.saveInterval = setInterval(() => {
      this.httpClient.patch(`/api/tasks/${this.task!!.id}`, { timer: this.task?.timer })
        .subscribe();
    }, 5 * 60 * 1000);
  }

  timerStop() {
    clearInterval(this.interval);
    clearInterval(this.saveInterval);
    this.httpClient.patch(`/api/tasks/${this.task!!.id}`, { timer: this.task?.timer })
      .subscribe();
  }

  timerReset() {
    clearInterval(this.interval);
    clearInterval(this.saveInterval);
    this.task!!.timer = 0;
    this.httpClient.patch(`/api/tasks/${this.task!!.id}`, { timer: this.task?.timer })
      .subscribe();
  }

  complete() {
    this.httpClient.delete(`/api/tasks/${this.task!!.id}`)
      .subscribe(() => this.taskService.fetchTasks());
  }
}
