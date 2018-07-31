import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010100Component } from './mgt010100.component';

describe('Mgt010100Component', () => {
  let component: Mgt010100Component;
  let fixture: ComponentFixture<Mgt010100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
