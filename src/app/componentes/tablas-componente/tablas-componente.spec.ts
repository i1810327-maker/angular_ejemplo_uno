import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablasComponente } from './tablas-componente';

describe('TablasComponente', () => {
  let component: TablasComponente;
  let fixture: ComponentFixture<TablasComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablasComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(TablasComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
