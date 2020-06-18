import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from '../../services/alert-message.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alertMessage: string;
  constructor(private _alertService: AlertMessageService) { }

  ngOnInit() {
    this.alertMessage = this._alertService.getAletMessage();
  }

}
