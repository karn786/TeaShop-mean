import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerSignupService } from '../../service/customer-signup.service';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';
import { MatSnackBar } from '@angular/material';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {
  customerSignUpForm: FormGroup;
  constructor(private _customerSignUpService: CustomerSignupService, private _alertService: AlertMessageService, private _alertSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.customerSignUpForm = new FormGroup({
      fName: new FormControl(null, Validators.required),
      lName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, this.checkPasswordLength.bind(this)]),
      gender: new FormControl('male')
    })
  }
  checkPasswordLength(control: FormControl){
    let typedPassword = control.value;
    if(typedPassword !=null){
      if(typedPassword.length > 6 && typedPassword.length < 14){
        return null
      }else{
        return {'PASSWORD_NOT_VALID': true}
      }
    }
    
  }
  onCustomerSignUp(){
    this._customerSignUpService.onCustomerSignUp(this.customerSignUpForm.value)
    .subscribe(
      (data) => {
        this.customerSignUpForm.reset({
          gender: 'male'
        });
        this._alertService.setAlertMessage("SignUp Successfully!");
        this._alertSnackBar.openFromComponent(AlertComponent, {duration: 4000})
      },
      (error) => {
        this._alertService.setAlertMessage('SignUp Failed!');
        this._alertSnackBar.openFromComponent(AlertComponent, {duration: 4000})
      }
    )
  }

}
