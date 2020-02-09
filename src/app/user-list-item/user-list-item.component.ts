import { Component, OnInit, Input } from '@angular/core';

/**
 *  @desc Creates a list element for every user in the array
 *  @input1 User item to be rendered
 *  @input2 Information about which color should be applied
*/

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user:String;  

  @Input() textColor:String; 

  constructor() { }

  ngOnInit() {
  }


}
