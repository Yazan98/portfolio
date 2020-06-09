/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterStaticComponent } from './footer-static.component';

describe('FooterStaticComponent', () => {
  let component: FooterStaticComponent;
  let fixture: ComponentFixture<FooterStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
