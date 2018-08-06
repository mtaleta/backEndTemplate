import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010101Component } from './mgt010101.component';

describe('Mgt010101Component', () => {
  let component: Mgt010101Component;
  let fixture: ComponentFixture<Mgt010101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
