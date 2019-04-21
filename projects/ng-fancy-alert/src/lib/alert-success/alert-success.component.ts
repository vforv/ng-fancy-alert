import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertServiceService } from '../alert-service.service';

@Component({
  selector: 'ng-fancy-alert-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.css']
})
export class AlertSuccessComponent implements OnInit {
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
