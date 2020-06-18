import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { AdminComponent } from './component/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminDashboardSidenavComponent } from './component/admin-dashboard/admin-dashboard-sidenav/admin-dashboard-sidenav.component';
import { ShowCustomersComponent } from './component/admin-dashboard/show-customers/show-customers.component';



@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, AdminDashboardSidenavComponent, ShowCustomersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
