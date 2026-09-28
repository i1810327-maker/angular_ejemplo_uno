import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Segundocomponentes } from './segundocomponentes';

describe('Segundocomponentes', () => {
  let component: Segundocomponentes;
  let fixture: ComponentFixture<Segundocomponentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segundocomponentes],
    }).compileComponents();

    fixture = TestBed.createComponent(Segundocomponentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
