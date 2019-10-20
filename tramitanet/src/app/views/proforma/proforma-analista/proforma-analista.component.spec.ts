import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformaAnalistaComponent } from './proforma-analista.component';

describe('ProformaAnalistaComponent', () => {
  let component: ProformaAnalistaComponent;
  let fixture: ComponentFixture<ProformaAnalistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProformaAnalistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProformaAnalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
