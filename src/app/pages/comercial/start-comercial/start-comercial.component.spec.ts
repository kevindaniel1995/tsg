import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComercialComponent } from './start-comercial.component';

describe('StartComercialComponent', () => {
  let component: StartComercialComponent;
  let fixture: ComponentFixture<StartComercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
