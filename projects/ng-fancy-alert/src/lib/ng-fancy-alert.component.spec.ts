import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFancyAlertComponent } from './ng-fancy-alert.component';

describe('NgFancyAlertComponent', () => {
  let component: NgFancyAlertComponent;
  let fixture: ComponentFixture<NgFancyAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFancyAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFancyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
