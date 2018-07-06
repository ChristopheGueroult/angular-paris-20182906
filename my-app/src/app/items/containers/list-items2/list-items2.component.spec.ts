import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItems2Component } from './list-items2.component';

describe('ListItems2Component', () => {
  let component: ListItems2Component;
  let fixture: ComponentFixture<ListItems2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItems2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItems2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
