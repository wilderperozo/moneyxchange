import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputExchangeComponent} from './input-exchange.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('InputExchangeComponent', () => {
  let component: InputExchangeComponent;
  let fixture: ComponentFixture<InputExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputExchangeComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validate that it are only numbers and not letters', () => {
    component = fixture.componentInstance;
    const eventPositive = new KeyboardEvent('1', {key: '1'});
    const eventNegative = new KeyboardEvent('1', {key: 'a'});
    const validateKeboardPositive = component.validateInputFormat(eventPositive);
    expect(validateKeboardPositive).toBeTruthy();
    const validateKeboardNegative = component.validateInputFormat(eventNegative);
    expect(validateKeboardNegative).toBeFalsy();
  });

  it('Validate format comma every thousand numbers and a limit of 4 digits for the decimals', () => {
    component = fixture.componentInstance;
    const regex = /^\d{1,3}(,\d{3})*(\.\d{1,4})?$/;
    component.writeValue('44444458');
    expect(regex.test(component.value)).toBeTruthy();
  });
});
