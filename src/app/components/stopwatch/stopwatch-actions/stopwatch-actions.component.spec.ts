import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchActionsComponent } from './stopwatch-actions.component';

describe('StopwatchActionsComponent', () => {
  let component: StopwatchActionsComponent;
  let fixture: ComponentFixture<StopwatchActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwatchActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
