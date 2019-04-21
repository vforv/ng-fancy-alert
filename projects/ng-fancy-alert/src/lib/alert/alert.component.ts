import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AlertDirective } from '../alert.directive';
import { Alert, IAlertMessage, IAlertMessageType } from '../alert';
import { AlertServiceService } from '../alert-service.service';
import { AlertSuccessComponent } from '../alert-success/alert-success.component';
import { AlertInfoComponent } from '../alert-info/alert-info.component';
import { AlertErrorComponent } from '../alert-error/alert-error.component';
import { AlertWarningComponent } from '../alert-warning/alert-warning.component';

@Component({
  selector: 'ng-fancy-alert-alert',
  template: `<div class="ad-banner-example">
  <div *ngIf="ngFancyHost.viewContainerRef.length > 0" (click)="closeAlertComponent()" class="overlay"></div>
  <ng-template ng-fancy-host></ng-template>
</div>`,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @ViewChild(AlertDirective) ngFancyHost: AlertDirective;
  public alerts: { [key: string]: any };

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private alertService: AlertServiceService) {
    this.alertService.add(this);

    this.alerts = {
      'success': AlertSuccessComponent,
      'info': AlertInfoComponent,
      'warning': AlertWarningComponent,
      'error': AlertErrorComponent
    }
  }

  ngOnInit() {
  }

  public loadAlertComponent(alert: IAlertMessage, alertType: IAlertMessageType) {

    const alertInst = new Alert(this.alerts[alertType], alert);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(alertInst.component);

    let viewContainerRef = this.ngFancyHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = alertInst.data;
  }

  public closeAlertComponent() {
    let viewContainerRef = this.ngFancyHost.viewContainerRef;
    viewContainerRef.clear();
  }

}
