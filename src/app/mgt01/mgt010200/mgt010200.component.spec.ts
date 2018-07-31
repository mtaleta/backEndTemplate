import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt010200Component } from './mgt010200.component';

describe('Mgt010200Component', () => {
  let component: Mgt010200Component;
  let fixture: ComponentFixture<Mgt010200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt010200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt010200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
