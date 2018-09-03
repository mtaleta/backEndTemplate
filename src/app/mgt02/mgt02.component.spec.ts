import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mgt02Component } from './mgt02.component';

describe('Mgt02Component', () => {
  let component: Mgt02Component;
  let fixture: ComponentFixture<Mgt02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mgt02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mgt02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
