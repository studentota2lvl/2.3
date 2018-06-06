import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateLogicComponent } from './calculate-logic.component';

describe('CalculateLogicComponent', () => {
  let component: CalculateLogicComponent;
  let fixture: ComponentFixture<CalculateLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
