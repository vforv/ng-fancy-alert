# NG FANCY ALERT
![](http://g.recordit.co/vttD0HN6pk.gif)

# Installation

```npm install ng-fancy-alert```

Step 1. Import NgFancyAlertModule in app.module.ts

```
import { NgFancyAlertModule } from 'ng-fancy-alert';

imports: [
    BrowserModule,
    NgFancyAlertModule
]
```

Step 2. Add fancy alert in app.component.ts

```
<ng-fancy-alert></ng-fancy-alert>
<router-outlet></router-outlet>
```

Step 3. Call it where you need it with

```
import { NgFancyAlertService } from 'ng-fancy-alert';

export class HomeComponent implements OnInit {

  constructor(private srv: NgFancyAlertService) { }

  ngOnInit() {
  }

  public infoAlert() {
    this.srv.info({title: 'What is Lorem Ipsum?', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', btnText: 'Nice!', redirect: '/home'})
  }
}
```