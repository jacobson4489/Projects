/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GolferComponent } from './golfer.component';

describe('GolferComponent', () => {
  let component: GolferComponent;
  let fixture: ComponentFixture<GolferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
