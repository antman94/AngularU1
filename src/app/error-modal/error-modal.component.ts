import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * @desc General component for displaying error text modals.
 * 
 * @Input Text to be displayed in the modal
 * 
 * @Input2 Boolean for deciding if modal is displayed or not
 * 
 * @Output Sends back an indication to the host component that the modal has been shown,
 *  and is ready to be shown again
 */

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {


  @Input() message:string;

  @Input() toggleShow:boolean;


  @Output() confirmShown:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }


  ngOnInit() {
  }

  onClickClose() {
   
    this.confirmShown.emit();
  }

}
