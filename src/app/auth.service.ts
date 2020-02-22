import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) {}


  checkIfLoggedIn() {

    if(localStorage.getItem("user")) {
      return 1;
    }
    else {
      return 2;
    }
  }

  login(user) {
    localStorage.setItem("user", user);
    this.route.navigate(['/dashboard']);
  }
  logout() {
    localStorage.clear();
  }

  public admins:AdminFull[] = [{

    firstName: 'John',
   
    lastName: 'Doe',
   
    email: 'john.doe@email.com',
   
    password: '1234567890'
   
    }, {
   
    firstName: 'Kylie',
   
    lastName: 'Johnson',
   
    email: 'kylie.johnson@email.com',
   
    password: '0987654321'
   
    }];

}

 
 