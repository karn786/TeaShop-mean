import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {
  customerLoginURL: string = 'http://localhost:3000/customer-login';

  constructor(private _http: HttpClient) { }
  onCustomerLogin(customerLoginData){
    return this._http.post(this.customerLoginURL, customerLoginData);
  }
}
