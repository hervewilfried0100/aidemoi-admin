import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleDialogComponent } from './ville-dialog.component';

describe('VilleDialogComponent', () => {
  let component: VilleDialogComponent;
  let fixture: ComponentFixture<VilleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
