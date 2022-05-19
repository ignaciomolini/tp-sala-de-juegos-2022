import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJuegosComponent } from './card-juegos.component';

describe('CardJuegosComponent', () => {
  let component: CardJuegosComponent;
  let fixture: ComponentFixture<CardJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
