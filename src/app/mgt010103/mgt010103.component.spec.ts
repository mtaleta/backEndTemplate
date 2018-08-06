import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010103Component } from './mgt010103.component';

describe('Mgt010103Component', () => {
  let component: Mgt010103Component;
  let fixture: ComponentFixture<Mgt010103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
