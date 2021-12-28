import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmButtonComponent } from './am-button.component';

describe('AmButtonComponent', () => {
  let component: AmButtonComponent;
  let fixture: ComponentFixture<AmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
