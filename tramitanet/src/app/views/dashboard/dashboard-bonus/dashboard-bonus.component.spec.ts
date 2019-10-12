import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBonusComponent } from './dashboard-bonus.component';

describe('DashboardBonusComponent', () => {
  let component: DashboardBonusComponent;
  let fixture: ComponentFixture<DashboardBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
