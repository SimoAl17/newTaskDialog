import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskDialogComponent } from './task-dialog.component';




@NgModule({
  declarations: [
  TaskDialogComponent
  ],
  imports: [

    SharedModule
  ],
  exports:[
    TaskDialogComponent
  ]
})
export class TaskDialogModule { }