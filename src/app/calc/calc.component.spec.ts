import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul be a 5', () => {
    let calc = 2 + 3;
    expect(calc).toBe(5);
  });

  it('should set message to on', () => {
    const component = new CalcComponent();
    // Before call the method
    expect(component.message).toMatch('Off');
    component.onClick();
    expect(component.message).toMatch('On');
  });
});
