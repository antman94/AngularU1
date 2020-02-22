import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';


/**
 * @desc Main component that renders JSON userlist and component for editing users
 * The content is rendered if a user is logged in
*/ 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userList: any[];
  displayMode:number;

  constructor(private auth: AuthService, private usersService: UsersService) {
    
   }
 
   /**
    * @desc When component is initialized, checks if user is logged in and displays the correct content.
    * Then fetches the httpClient observable through the usersservice, which gets subscribed to and saves 
    * the response(json users) to userList array.
    */

  ngOnInit() {

    this.displayMode = this.auth.checkIfLoggedIn();
    
    this.usersService.getUsers('users').subscribe(
      (response:any[]) => {
        this.userList = response;
      },
      (error) => console.log('error', error),
     
  );
  }
  addNewUser(userName) {
    this.userList.unshift(userName);
  }
  deleteUser() {
    this.userList.pop();
  }
  
}
