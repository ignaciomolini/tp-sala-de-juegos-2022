import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntadosPuntajesComponent } from './preguntados-puntajes.component';

describe('PreguntadosPuntajesComponent', () => {
  let component: PreguntadosPuntajesComponent;
  let fixture: ComponentFixture<PreguntadosPuntajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntadosPuntajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntadosPuntajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
