import { Injectable } from '@angular/core';
import { AlertServiceService } from './alert-service.service';
import { IAlertMessage } from './alert';

@Injectable({
  providedIn: 'root'
})
export class NgFancyAlertService {

  constructor(private alertService: AlertServiceService) { }

  public info({ title, message, redirect, btnText }: IAlertMessage) {
    this.alertService.updateView({
      title,
      message,
      btnText,
      redirect
    }, 'info');
  }

  public warning({ title, message, redirect, btnText }: IAlertMessage) {
    this.alertService.updateView({
      title,
      message,
      btnText,
      redirect
    }, 'warning');
  }

  public success({ title, message, redirect, btnText }: IAlertMessage) {
    this.alertService.updateView({
      title,
      message,
      btnText,
      redirect
    }, 'success');
  }

  public error({ title, message, redirect, btnText }: IAlertMessage) {
    this.alertService.updateView({
      title,
      message,
      btnText,
      redirect
    }, 'error');
  }
}
