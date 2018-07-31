import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010300Component } from './mgt010300.component';

describe('Mgt010300Component', () => {
  let component: Mgt010300Component;
  let fixture: ComponentFixture<Mgt010300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
