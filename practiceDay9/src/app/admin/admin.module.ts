import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AdminComponent, AdminListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
