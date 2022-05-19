import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallaDbzPuntajesComponent } from './batalla-dbz-puntajes.component';

describe('BatallaDbzPuntajesComponent', () => {
  let component: BatallaDbzPuntajesComponent;
  let fixture: ComponentFixture<BatallaDbzPuntajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatallaDbzPuntajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatallaDbzPuntajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
