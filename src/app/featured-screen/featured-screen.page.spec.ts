import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedScreenPage } from './featured-screen.page';

describe('FeaturedScreenPage', () => {
  let component: FeaturedScreenPage;
  let fixture: ComponentFixture<FeaturedScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
