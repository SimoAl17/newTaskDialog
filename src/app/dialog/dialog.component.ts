import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('visibleInvisible', [
      state('visible', style({
        // opacity: 1,
        top: '0px'
      })),
      state('invisible', style({
        // opacity: 0
        top: '10vh'
      })),
      transition('visible => invisible', [
        animate('1s'),
        style({
          display: 'none'
        })
      ]),
      transition('invisible => visible', [
        animate('1s'),
        style({
          display: 'flex'
        })
      ]),
    ]),
  ]
})
export class DialogComponent implements OnInit {

  constructor() { }

  @Input() visibilityState = 'visible';
  @Output() closeWithResult = new EventEmitter<string>();

  ngOnInit(): void {
  }

  closeDialog(result?: string) {
    if (result) {
      this.closeWithResult.emit(result);
    }
    this.visibilityState = 'invisible';
  }

}
