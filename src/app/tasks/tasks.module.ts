import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { TaskCreateComponent } from './task-create/task-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TasksRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [TaskService],
})
export class TasksModule { }
