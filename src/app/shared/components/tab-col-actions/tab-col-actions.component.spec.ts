import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabColActionsComponent } from './tab-col-actions.component';

describe('TabColActionsComponent', () => {
  let component: TabColActionsComponent;
  let fixture: ComponentFixture<TabColActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabColActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabColActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
