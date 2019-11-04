import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceroComponent } from './acero.component';

describe('AceroComponent', () => {
  let component: AceroComponent;
  let fixture: ComponentFixture<AceroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
