import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunkFood } from './junk-food';

describe('JunkFood', () => {
  let component: JunkFood;
  let fixture: ComponentFixture<JunkFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JunkFood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunkFood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
