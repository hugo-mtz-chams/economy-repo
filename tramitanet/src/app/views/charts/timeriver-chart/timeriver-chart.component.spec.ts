import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeriverChartComponent } from './timeriver-chart.component';

describe('TimeriverChartComponent', () => {
  let component: TimeriverChartComponent;
  let fixture: ComponentFixture<TimeriverChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeriverChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeriverChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
