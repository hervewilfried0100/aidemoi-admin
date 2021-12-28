import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierDialogComponent } from './quartier-dialog.component';

describe('QuartierDialogComponent', () => {
  let component: QuartierDialogComponent;
  let fixture: ComponentFixture<QuartierDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartierDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
