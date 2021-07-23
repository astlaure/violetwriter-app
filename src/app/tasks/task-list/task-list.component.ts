import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task, TaskPriority } from '../task.model';
import { Observable } from 'rxjs';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  $data: Observable<Task[]> = new Observable();
  tasks: { low: Task[], medium: Task[], high: Task[], critical: Task[] } = {
    low: [],
    medium: [],
    high: [],
    critical: [],
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.$tasks.subscribe((values) => {
      this.tasks.low = values.filter((task) => task.priority === TaskPriority.LOW && !task.done);
      this.tasks.medium = values.filter((task) => task.priority === TaskPriority.MEDIUM && !task.done);
      this.tasks.high = values.filter((task) => task.priority === TaskPriority.HIGH && !task.done);
      this.tasks.critical = values.filter((task) => task.priority === TaskPriority.CRITICAL && !task.done);
    });
  }

  ngOnDestroy(): void {}

}
