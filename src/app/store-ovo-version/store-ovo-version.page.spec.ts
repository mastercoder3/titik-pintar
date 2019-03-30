import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOVOVersionPage } from './store-ovo-version.page';

describe('StoreOVOVersionPage', () => {
  let component: StoreOVOVersionPage;
  let fixture: ComponentFixture<StoreOVOVersionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreOVOVersionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOVOVersionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
