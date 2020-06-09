/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MwarridPageComponent } from './mwarrid-page.component';

describe('MwarridPageComponent', () => {
  let component: MwarridPageComponent;
  let fixture: ComponentFixture<MwarridPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwarridPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwarridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
