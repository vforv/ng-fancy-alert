import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertServiceService } from '../alert-service.service';

@Component({
  selector: 'ng-fancy-alert-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.scss']
})
export class AlertErrorComponent implements OnInit {

  @Input() data: { title: string; message: string; redirect?: string; btnText: string };
  constructor(private router: Router, private alertService: AlertServiceService) { }

  ngOnInit() {
  }

  public submit() {
    if (!this.data.redirect) {
      this.alertService.removeView();
      return;
    }
    this.router.navigate([this.data.redirect]);
    this.alertService.removeView();
  }

}
