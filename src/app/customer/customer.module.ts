import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { MaterialModule } from '../material/material.module';
import { CustomerLoginComponent } from './component/customer-login/customer-login.component';
import { CustomerSignupComponent } from './component/customer-signup/customer-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { CustomerDashboardSidenavComponent } from './component/customer-dashboard/customer-dashboard-sidenav/customer-dashboard-sidenav.component';
import { CustomerDashboardOrdersComponent } from './component/customer-dashboard/customer-dashboard-orders/customer-dashboard-orders.component';
import { CustomerDashboardUpdateComponent } from './component/customer-dashboard/customer-dashboard-update/customer-dashboard-update.component';
import { CompletedComponent } from './component/customer-dashboard/customer-dashboard-orders/completed/completed.component';
import { PendingComponent } from './component/customer-dashboard/customer-dashboard-orders/pending/pending.component';
import { CancelledComponent } from './component/customer-dashboard/customer-dashboard-orders/cancelled/cancelled.component';
import { ProductsComponent } from './component/customer-dashboard/products/products.component';


@NgModule({
  declarations: [CustomerLoginComponent, CustomerSignupComponent, CustomerDashboardComponent, CustomerDashboardSidenavComponent, CustomerDashboardOrdersComponent, CustomerDashboardUpdateComponent, CompletedComponent, PendingComponent, CancelledComponent, ProductsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
