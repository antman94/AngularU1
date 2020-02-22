import { Component, OnInit, } from '@angular/core';
import { AdminLogin } from '../models/admin-login.model';
import { AuthService } from '../auth.service';

/**
 * @desc Component for login screen, contains a template-driven form and functionality for validating 
 * users login credentials input.
 * 
 */
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  
  userEmail:string;
  password:string;
  userModel:AdminLogin = new AdminLogin(this.userEmail, this.password);


  displayMode:number;
  showError:boolean = false;
  errorMessage:string = "Invalid login credentials";
  


  constructor(private auth: AuthService) { }

/**
 * @desc Calls AuthService and checks for a user in localstorage, then shows screen depending on
 * whether or not a user is there.
 */
  ngOnInit() {
    this.displayMode = this.auth.checkIfLoggedIn();
  }

  /**
   * @desc Goes through the register of admin users and checks if the entered form input matches a
   * user in the admins array. If the input matches, the user gets logged in and the users email gets
   * set in localstorage, if not, the user gets the error modal.
   */
  
  onClickLogin() {
 
    for(let i = 0; i < this.auth.admins.length; i++) {
      if(this.userModel.email == this.auth.admins[i].email && 
        this.userModel.password == this.auth.admins[i].password) {
          this.auth.login(this.userModel.email);
      }
      else {
        this.showError = true;
      }
    }
  }
  /**
   * @desc Displays the loginform, called by registration-component
   */
  toggleLoginPage() {
    this.displayMode = 2;
  }
  /**
   * @desc Clears localstorage through AuthService and displays loginform
   */
  onClickLogout() {
    this.auth.logout();
    this.displayMode = 2;
  }
  /**
   * @desc When user clicks create new user, display registrationform
   */
  onClickRegister() {
    this.displayMode = 3;
  }

  /**
   * @desc Sets condition for displaying back to false, so that it can be shown again.
   */
  toggleErrorModal() {
    this.showError = false;
  }
}
