import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationDialogComponent } from './prestation-dialog.component';

describe('PrestationDialogComponent', () => {
  let component: PrestationDialogComponent;
  let fixture: ComponentFixture<PrestationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
