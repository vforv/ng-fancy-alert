import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgFancyAlertComponent } from './ng-fancy-alert.component';
import { AlertComponent } from './alert/alert.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertDirective } from './alert.directive';
import { AlertServiceService } from './alert-service.service';
import { RouterModule } from '@angular/router';
import { AlertErrorComponent } from './alert-error/alert-error.component';
import { AlertInfoComponent } from './alert-info/alert-info.component';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';

@NgModule({
  declarations: [NgFancyAlertComponent, AlertComponent, AlertSuccessComponent, AlertDirective, AlertErrorComponent, AlertInfoComponent, AlertWarningComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [AlertServiceService],
  entryComponents: [AlertSuccessComponent, AlertInfoComponent, AlertWarningComponent, AlertErrorComponent],
  exports: [NgFancyAlertComponent]
})
export class NgFancyAlertModule { }
