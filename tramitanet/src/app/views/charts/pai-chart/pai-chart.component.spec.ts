import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiChartComponent } from './pai-chart.component';

describe('PaiChartComponent', () => {
  let component: PaiChartComponent;
  let fixture: ComponentFixture<PaiChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
