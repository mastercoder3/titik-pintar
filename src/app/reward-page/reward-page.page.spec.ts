import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPagePage } from './reward-page.page';

describe('RewardPagePage', () => {
  let component: RewardPagePage;
  let fixture: ComponentFixture<RewardPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
