import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerSignupService {
  customerSignUpUrl = 'http://localhost:3000/customer-signup'
  constructor(private _http: HttpClient) { }
  onCustomerSignUp(customerData){
    return this._http.post(this.customerSignUpUrl, customerData);
  }
}
