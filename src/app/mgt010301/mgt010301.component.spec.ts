import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010301Component } from './mgt010301.component';

describe('Mgt010301Component', () => {
  let component: Mgt010301Component;
  let fixture: ComponentFixture<Mgt010301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
