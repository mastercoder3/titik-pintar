import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendPagePage } from './friend-page.page';

describe('FriendPagePage', () => {
  let component: FriendPagePage;
  let fixture: ComponentFixture<FriendPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
