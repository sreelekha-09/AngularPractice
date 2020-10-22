import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminComponent } from './admin/admin.component';

const routes:Routes=[
    {path:"admin", component:AdminComponent},
    {path:"adminList",component:AdminListComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminRoutingModule{}