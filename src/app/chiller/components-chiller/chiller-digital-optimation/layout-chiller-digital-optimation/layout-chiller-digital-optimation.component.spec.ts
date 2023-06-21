import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChillerDigitalOptimationComponent } from './layout-chiller-digital-optimation.component';

describe('LayoutChillerDigitalOptimationComponent', () => {
  let component: LayoutChillerDigitalOptimationComponent;
  let fixture: ComponentFixture<LayoutChillerDigitalOptimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutChillerDigitalOptimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutChillerDigitalOptimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
