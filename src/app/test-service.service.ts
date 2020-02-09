import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  public userList:String[] = [];


  addNewUser(userName) {
    this.userList.unshift(userName);
  }
  deleteUser() {
    this.userList.pop();
  }
}
