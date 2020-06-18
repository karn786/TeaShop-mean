import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AdminComponent } from './admin/component/admin/admin.component';
import { CustomerLoginComponent } from './customer/component/customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer/component/customer-signup/customer-signup.component';
import { AdminDashboardComponent } from './admin/component/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer/component/customer-dashboard/customer-dashboard.component';
import { CustomerDashboardOrdersComponent } from './customer/component/customer-dashboard/customer-dashboard-orders/customer-dashboard-orders.component';
import { CustomerDashboardUpdateComponent } from './customer/component/customer-dashboard/customer-dashboard-update/customer-dashboard-update.component';
import { ProductsComponent } from './customer/component/customer-dashboard/products/products.component';
import { ShowCustomersComponent } from './admin/component/admin-dashboard/show-customers/show-customers.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin-login', component: AdminComponent},
  {path: 'customer-login', component: CustomerLoginComponent},
  {path: 'customer-signup', component: CustomerSignupComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent, children: [
    {path: 'show-customers', component: ShowCustomersComponent}
  ]},
  {path: 'customer-dashboard', component: CustomerDashboardComponent, children: [
    {path: 'products', component: ProductsComponent},
    { path: 'customer-orders', component: CustomerDashboardOrdersComponent},
    {path: 'customer-update', component: CustomerDashboardUpdateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
