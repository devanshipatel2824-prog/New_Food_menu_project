import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalicFood } from './italic-food';

describe('ItalicFood', () => {
  let component: ItalicFood;
  let fixture: ComponentFixture<ItalicFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItalicFood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItalicFood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
