import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsGeneralesDeVentesComponent } from './conditions-generales-de-ventes.component';

describe('ConditionsGeneralesDeVentesComponent', () => {
  let component: ConditionsGeneralesDeVentesComponent;
  let fixture: ComponentFixture<ConditionsGeneralesDeVentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsGeneralesDeVentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsGeneralesDeVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
