import { TestBed } from '@angular/core/testing';

import { AllassestChillerOptimizationService } from './allassest-chiller-optimization.service';

describe('AllassestChillerOptimizationService', () => {
  let service: AllassestChillerOptimizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllassestChillerOptimizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
