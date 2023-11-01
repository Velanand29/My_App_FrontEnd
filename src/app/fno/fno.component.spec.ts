import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FNOComponent } from './fno.component';

describe('FNOComponent', () => {
  let component: FNOComponent;
  let fixture: ComponentFixture<FNOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FNOComponent]
    });
    fixture = TestBed.createComponent(FNOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
