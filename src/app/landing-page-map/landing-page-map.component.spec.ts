import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageMapComponent } from './landing-page-map.component';

describe('LandingPageMapComponent', () => {
  let component: LandingPageMapComponent;
  let fixture: ComponentFixture<LandingPageMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
