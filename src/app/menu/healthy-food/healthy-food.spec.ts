import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyFood } from './healthy-food';

describe('HealthyFood', () => {
  let component: HealthyFood;
  let fixture: ComponentFixture<HealthyFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthyFood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthyFood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
