import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowCustomersService {
  showCustomersURL: string = 'http://localhost:3000/show-all-customers';
  constructor(private _http: HttpClient) { }
  showAllCustomers(){
    return this._http.get(this.showCustomersURL);
  }
}
