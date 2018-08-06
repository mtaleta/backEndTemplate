import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010401Component } from './mgt010401.component';

describe('Mgt010401Component', () => {
  let component: Mgt010401Component;
  let fixture: ComponentFixture<Mgt010401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
