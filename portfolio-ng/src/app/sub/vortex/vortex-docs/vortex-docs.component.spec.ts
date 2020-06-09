/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VortexDocsComponent } from './vortex-docs.component';

describe('VortexDocsComponent', () => {
  let component: VortexDocsComponent;
  let fixture: ComponentFixture<VortexDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VortexDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VortexDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
