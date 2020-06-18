import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  alertMessage: string;
  constructor() { }
  setAlertMessage(msg){
    this.alertMessage = msg;
  }
  getAletMessage(){
    return this.alertMessage;
  }
}
