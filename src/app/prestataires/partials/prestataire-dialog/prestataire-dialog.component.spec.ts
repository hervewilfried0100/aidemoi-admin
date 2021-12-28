import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireDialogComponent } from './prestataire-dialog.component';

describe('PrestataireDialogComponent', () => {
  let component: PrestataireDialogComponent;
  let fixture: ComponentFixture<PrestataireDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
