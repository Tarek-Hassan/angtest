import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { FormsModule }   from '@angular/forms';

import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersComponent, UserFormComponent, UserListComponent, UserProfileComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class UsersModule { }
