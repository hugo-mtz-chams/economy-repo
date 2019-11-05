import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenClienteEstadoCuentaShowComponent } from './resumen-cliente-estado-cuenta-show.component';

describe('ResumenClienteEstadoCuentaShowComponent', () => {
  let component: ResumenClienteEstadoCuentaShowComponent;
  let fixture: ComponentFixture<ResumenClienteEstadoCuentaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenClienteEstadoCuentaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenClienteEstadoCuentaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
