import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallaDbzComponent } from './batalla-dbz.component';

describe('BatallaDbComponent', () => {
  let component: BatallaDbzComponent;
  let fixture: ComponentFixture<BatallaDbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatallaDbzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatallaDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
