import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ng-fancy-host]'
})
export class AlertDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
