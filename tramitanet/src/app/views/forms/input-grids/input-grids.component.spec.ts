import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGridsComponent } from './input-grids.component';

describe('InputGridsComponent', () => {
  let component: InputGridsComponent;
  let fixture: ComponentFixture<InputGridsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGridsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
