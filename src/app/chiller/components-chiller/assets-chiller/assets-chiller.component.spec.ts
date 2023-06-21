import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsChillerComponent } from './assets-chiller.component';

describe('AssetsChillerComponent', () => {
  let component: AssetsChillerComponent;
  let fixture: ComponentFixture<AssetsChillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsChillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsChillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
