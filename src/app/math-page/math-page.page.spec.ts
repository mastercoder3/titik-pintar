import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathPagePage } from './math-page.page';

describe('MathPagePage', () => {
  let component: MathPagePage;
  let fixture: ComponentFixture<MathPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
