import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task: Task | null = null;
  interval: any = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {}

  timerStart() {
    this.interval = setInterval(() => {
      this.task!!.timer++;
    }, 1000);
  }

  timerStop() {
    clearInterval(this.interval);
    this.httpClient.patch(`/api/tasks/${this.task!!.id}`, { timer: this.task?.timer })
      .subscribe();
  }
}
