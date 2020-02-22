import { Component, OnInit, Input } from '@angular/core';

/**
 * @desc Creates list for displaying users, and button to toggle username color
 * @input Array of users 
 */

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  @Input() users:any;

  textColor:String = "red";

  constructor() { }

  ngOnInit() {
  }
  /**
   *  @desc Sets text color depending on its current value
  */
  onClickToggle() {
    if(this.textColor == "red") {
      this.textColor = "green";
    }
    else {
      this.textColor = "red";
    }
  }

}
