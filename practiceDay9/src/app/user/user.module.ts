import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';




@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  exports:[
    UserComponent
  ]
})
export class UserModule { }
