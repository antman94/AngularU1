import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { EditUsersComponent } from './edit-users/edit-users.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent,
    UserListItemComponent,
    EditUsersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
