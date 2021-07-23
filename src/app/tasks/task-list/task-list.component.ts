import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task.model';
import { Observable } from 'rxjs';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  $data: Observable<Task[]> = new Observable();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.$data = this.taskService.$tasks;
  }

  ngOnDestroy(): void {}

}
