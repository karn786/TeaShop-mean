import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  adminLoginURL: string = "http://localhost:3000/admin-login";
  constructor(private _http: HttpClient) { }
  onAdminLogin(adminLoginData){
    return this._http.post(this.adminLoginURL, adminLoginData);
  }
}
