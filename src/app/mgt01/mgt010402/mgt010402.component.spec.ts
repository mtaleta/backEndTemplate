import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010402Component } from './mgt010402.component';

describe('Mgt010402Component', () => {
  let component: Mgt010402Component;
  let fixture: ComponentFixture<Mgt010402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
