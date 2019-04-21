import { Component, OnInit, Input } from '@angular/core';
import { AlertServiceService } from '../alert-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-fancy-alert-alert-info',
  templateUrl: './alert-info.component.html',
  styleUrls: ['./alert-info.component.scss']
})
export class AlertInfoComponent implements OnInit {

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
