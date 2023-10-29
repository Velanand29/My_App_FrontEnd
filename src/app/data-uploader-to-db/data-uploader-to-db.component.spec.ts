import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUploaderToDBComponent } from './data-uploader-to-db.component';

describe('DataUploaderToDBComponent', () => {
  let component: DataUploaderToDBComponent;
  let fixture: ComponentFixture<DataUploaderToDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataUploaderToDBComponent]
    });
    fixture = TestBed.createComponent(DataUploaderToDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
