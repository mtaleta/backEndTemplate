import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnclockComponent } from './unclock.component';

describe('UnclockComponent', () => {
  let component: UnclockComponent;
  let fixture: ComponentFixture<UnclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnclockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
