import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBoardPage } from './score-board.page';

describe('ScoreBoardPage', () => {
  let component: ScoreBoardPage;
  let fixture: ComponentFixture<ScoreBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreBoardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
