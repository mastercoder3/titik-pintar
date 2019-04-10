import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalToasterComponent } from './modal-toaster.component';

describe('ModalToasterComponent', () => {
  let component: ModalToasterComponent;
  let fixture: ComponentFixture<ModalToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalToasterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
