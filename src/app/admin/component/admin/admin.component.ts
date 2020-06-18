import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminLoginService } from '../../service/admin-login.service';
import { MatSnackBar } from '@angular/material';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminLoginForm: FormGroup;
  constructor(private _adminLoginservice: AdminLoginService, private _snackBar: MatSnackBar, private _alertService: AlertMessageService, private _router: Router) { }
  
  ngOnInit() {
    this.adminLoginForm = new FormGroup({
      adminName: new FormControl(null, Validators.required),
      adminPassword: new FormControl(null, Validators.required)
    })
  }
  onAdminLogin(){
    this._adminLoginservice.onAdminLogin(this.adminLoginForm.value)
    .subscribe(data => {
      if(data){
        this._alertService.setAlertMessage("Successfully Authenicated");
        this._snackBar.openFromComponent(AlertComponent, {duration: 4000});
        this.adminLoginForm.reset();
        this._router.navigate(['/admin-dashboard']);
      }
    },
    error => {
      this._alertService.setAlertMessage("Not Authenticated");
      this._snackBar.openFromComponent(AlertComponent, {duration: 4000})
    });
  }

}
