import { TestBed } from '@angular/core/testing';

import { NgFancyAlertService } from './ng-fancy-alert.service';

describe('NgFancyAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFancyAlertService = TestBed.get(NgFancyAlertService);
    expect(service).toBeTruthy();
  });
});
