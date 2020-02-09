import { Component, OnInit, Input } from '@angular/core';
import { TestServiceService } from '../test-service.service';

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


  textColor:String = "red";

  constructor(private testServiceService: TestServiceService) { }

  ngOnInit() {
  
  }
  getUserList() {
  
  }
  onClickToggle() {
    if(this.textColor == "red") {
      this.textColor = "green";
    }
    else {
      this.textColor = "red";
    }
  }

}
