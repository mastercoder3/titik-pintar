import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesCollectionPage } from './prizes-collection.page';

describe('PrizesCollectionPage', () => {
  let component: PrizesCollectionPage;
  let fixture: ComponentFixture<PrizesCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizesCollectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizesCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
