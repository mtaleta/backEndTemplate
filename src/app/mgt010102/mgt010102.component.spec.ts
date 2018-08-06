import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010102Component } from './mgt010102.component';

describe('Mgt010102Component', () => {
  let component: Mgt010102Component;
  let fixture: ComponentFixture<Mgt010102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
