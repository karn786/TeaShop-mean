import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { AlertMessageService } from './services/alert-message.service';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [HeaderToolbarComponent, HomeComponent, AlertComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [HeaderToolbarComponent, AlertComponent],
  providers: [AlertMessageService],
  entryComponents: [AlertComponent]
})
export class SharedModule { }
