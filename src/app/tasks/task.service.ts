import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // $tasks: Observable<Task[]> = new Observable<Task[]>();
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  $tasks = this.tasksSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    // this.tasksSubject.next(this.fetchTasks());
    this.fetchTasks();
  }

  fetchTasks() {
    // this.$tasks = this.httpClient.get<Task[]>('/api/tasks');
    this.httpClient.get<Task[]>('/api/tasks')
      .subscribe((response) => this.tasksSubject.next(response))
      // .unsubscribe();
  }
}
