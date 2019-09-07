import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialParamsComponent } from './initial-params.component';

describe('InitialParamsComponent', () => {
  let component: InitialParamsComponent;
  let fixture: ComponentFixture<InitialParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
