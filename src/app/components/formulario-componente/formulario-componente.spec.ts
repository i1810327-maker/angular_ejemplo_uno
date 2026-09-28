import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioComponente } from './formulario-componente';

describe('FormularioComponente', () => {
  let component: FormularioComponente;
  let fixture: ComponentFixture<FormularioComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
