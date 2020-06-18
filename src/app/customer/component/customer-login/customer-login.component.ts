import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerLoginService } from '../../service/customer-login.service';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';
import { MatSnackBar } from '@angular/material';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  customerLoginForm: FormGroup;
  constructor(private _customerLoginService: CustomerLoginService, private _alertService: AlertMessageService, private _alertSnackbar: MatSnackBar, private _router: Router) { }

  ngOnInit() {
    this.customerLoginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
  onCustomerLogin(){
    this._customerLoginService.onCustomerLogin(this.customerLoginForm.value)
    .subscribe(
      (data) => {
        this._alertService.setAlertMessage("Login Successfully!");
        this._alertSnackbar.openFromComponent(AlertComponent, {duration: 4000});
        this.customerLoginForm.reset();
        this._router.navigate(['/customer-dashboard']);
      },
      (error) => {
        this._alertService.setAlertMessage("Login Failed!");
        this._alertSnackbar.openFromComponent(AlertComponent, {duration: 4000});
      }
    );
  }

}
