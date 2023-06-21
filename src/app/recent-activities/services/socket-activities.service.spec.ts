import { TestBed } from '@angular/core/testing';

import { SocketActivitiesService } from './socket-activities.service';

describe('SocketActivitiesService', () => {
  let service: SocketActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
