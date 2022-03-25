import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})

export class AppComponent {
 
  constructor(public dialog: MatDialog) {}

  animal?: string;
  openDialog() {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '250px',
      data: {animal: this.animal},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }



  
}