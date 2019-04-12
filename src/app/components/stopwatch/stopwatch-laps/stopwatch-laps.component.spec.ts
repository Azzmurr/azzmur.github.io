import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchLapsComponent } from './stopwatch-laps.component';

describe('StopwatchLapsComponent', () => {
  let component: StopwatchLapsComponent;
  let fixture: ComponentFixture<StopwatchLapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwatchLapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchLapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
