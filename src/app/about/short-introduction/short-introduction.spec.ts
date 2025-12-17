import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortIntroduction } from './short-introduction';

describe('ShortIntroduction', () => {
  let component: ShortIntroduction;
  let fixture: ComponentFixture<ShortIntroduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortIntroduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortIntroduction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
