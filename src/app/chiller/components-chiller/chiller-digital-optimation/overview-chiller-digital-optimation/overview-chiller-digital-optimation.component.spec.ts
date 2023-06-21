import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewChillerDigitalOptimationComponent } from './overview-chiller-digital-optimation.component';

describe('OverviewChillerDigitalOptimationComponent', () => {
  let component: OverviewChillerDigitalOptimationComponent;
  let fixture: ComponentFixture<OverviewChillerDigitalOptimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewChillerDigitalOptimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewChillerDigitalOptimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
