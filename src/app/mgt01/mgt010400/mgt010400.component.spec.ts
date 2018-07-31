import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010400Component } from './mgt010400.component';

describe('Mgt010400Component', () => {
  let component: Mgt010400Component;
  let fixture: ComponentFixture<Mgt010400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
