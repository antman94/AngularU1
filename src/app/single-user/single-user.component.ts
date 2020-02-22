import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

/**
 * @desc Component that displays extended information about a user when it's clicked on in the 
 * userlist component. 
 */

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

export class SingleUserComponent implements OnInit {

  user:any;
  userId:string;


  constructor(private route: ActivatedRoute, private usersService: UsersService) { 

   }
  
   /**
    * @desc Subscribes to the router observable "params" and saves its property "id", then uses it
    * to build the URL to get the correct user from json through the getUsers observable from usersService.
    */

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.userId = params.id;
   })

   this.usersService.getUsers('users/' + this.userId).subscribe(
    (response:any) => {

      this.user = response;

    },
    (error) => console.log('error', error),
    
    );
  
  }
}
