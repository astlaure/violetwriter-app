import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TasksRoutingModule
  ],
  providers: [TaskService],
})
export class TasksModule { }
