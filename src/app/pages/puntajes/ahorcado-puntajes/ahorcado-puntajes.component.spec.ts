import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoPuntajesComponent } from './ahorcado-puntajes.component';

describe('AhorcadoPuntajesComponent', () => {
  let component: AhorcadoPuntajesComponent;
  let fixture: ComponentFixture<AhorcadoPuntajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoPuntajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoPuntajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
