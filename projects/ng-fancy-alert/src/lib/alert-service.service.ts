import { Injectable } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { IAlertMessage, IAlertMessageType } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {
  public alertComponent: AlertComponent;

  constructor() {

  }

  public add(cmp) {
    this.alertComponent = cmp;
  }

  public updateView({ title, message, redirect, btnText }: IAlertMessage, alertMessageType: IAlertMessageType) {
    const alert = { title, message, redirect, btnText };
    this.alertComponent.loadAlertComponent(alert, alertMessageType);
  }

  public removeView() {
    this.alertComponent.closeAlertComponent();
  }
}
