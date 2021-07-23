import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { TaskCreateComponent } from './task-create/task-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskCardComponent } from './task-card/task-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskCreateComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [TaskService],
})
export class TasksModule { }
