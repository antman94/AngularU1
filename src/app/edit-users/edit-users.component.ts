import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/**
 * @desc Creates UI for adding and removing users
 * @output1  Enables sending information about new users
 * @output2 Enables sending information to delete a user
 */

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  public user:string;

  @Output() addUser:EventEmitter<string> = new EventEmitter<string>();

  @Output() removeUser:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }


  onClickAdd() {
    this.addUser.emit(this.user);
  }

  onClickDelete() {
    this.removeUser.emit();
  }

  ngOnInit() {
  }
  


}
