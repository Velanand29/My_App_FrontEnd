import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeCalcComponent } from './range-calc.component';

describe('RangeCalcComponent', () => {
  let component: RangeCalcComponent;
  let fixture: ComponentFixture<RangeCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeCalcComponent]
    });
    fixture = TestBed.createComponent(RangeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
