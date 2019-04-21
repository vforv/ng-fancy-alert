import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-fancy-alert',
  template: `
    <ng-fancy-alert-alert></ng-fancy-alert-alert>
  `,
  styleUrls: ['./ng-fancy-alert.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgFancyAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
