import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorMenorPuntajesComponent } from './mayor-menor-puntajes.component';

describe('MayorMenorPuntajesComponent', () => {
  let component: MayorMenorPuntajesComponent;
  let fixture: ComponentFixture<MayorMenorPuntajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayorMenorPuntajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorMenorPuntajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
