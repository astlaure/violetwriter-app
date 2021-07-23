import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TaskPriority } from '../task.model';
import { TaskService } from '../task.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
  taskPriority = TaskPriority;
  taskCreateForm = this.formBuilder.group({
    title: ['', Validators.required],
    priority: ['medium', Validators.required],
    description: [''],
  });

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.httpClient.post('/api/tasks', this.taskCreateForm.value)
      .toPromise()
      .then(() => {
        this.taskCreateForm.reset();
        this.taskService.fetchTasks();
      })
      .catch(() => {});
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
