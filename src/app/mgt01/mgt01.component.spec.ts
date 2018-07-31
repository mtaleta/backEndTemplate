import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt01Component } from './mgt01.component';

describe('Mgt01Component', () => {
  let component: Mgt01Component;
  let fixture: ComponentFixture<Mgt01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
