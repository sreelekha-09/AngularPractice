import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admins/admin/admin.component';
import { AdminsComponent } from './admins/admins.component';
import { EditAdminComponent } from './admins/edit-admin/edit-admin.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'home',component:HomeComponent},
  {path:'users/:id',component:UserComponent},
  {path:'admins',
  //canActivate:[AuthGuard],
  canActivateChild:[AuthGuard],
  component:AdminsComponent,
  children:[
    {path:':id',component:AdminComponent},
  {path:':id/edit',component:EditAdminComponent}
  ]
  },
  {path:'errorPage',component:ErrorPageComponent,data:{message:'404 error'}},
  {path:'**',redirectTo:'/errorPage'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    //RouterModule.forRoot(routes,{useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
