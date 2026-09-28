import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaComponente } from './tabla-componente';

describe('TablaComponente', () => {
  let component: TablaComponente;
  let fixture: ComponentFixture<TablaComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
