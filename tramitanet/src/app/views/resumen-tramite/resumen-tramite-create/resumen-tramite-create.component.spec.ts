import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenTramiteCreateComponent } from './resumen-tramite-create.component';

describe('ResumenTramiteCreateComponent', () => {
  let component: ResumenTramiteCreateComponent;
  let fixture: ComponentFixture<ResumenTramiteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenTramiteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenTramiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
