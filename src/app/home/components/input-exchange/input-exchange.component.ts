import {Component, forwardRef, Input, Provider, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const INPUTEXCHANGEPROVIDER: Provider = {
  provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputExchangeComponent),
  multi: true
};

@Component({
  selector: 'app-input-exchange',
  templateUrl: './input-exchange.component.html',
  styleUrls: ['./input-exchange.component.scss'],
  providers: [INPUTEXCHANGEPROVIDER]
})
export class InputExchangeComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() symbol = 'USD';
  @ViewChild('inputExchange') inputElement;
  value = '';
  onChange = (value: string) => {
  };
  onTouched = () => {
  };

  validateInputFormat($event: KeyboardEvent) {
    if (!new RegExp(/[0-9.,]+/).test($event.key)) {
      $event.preventDefault();
      return false;
    }
    return true;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    const innerValue = value.toString();
    if (innerValue.charAt(innerValue.length - 1) !== '.' && !isNaN(parseFloat(innerValue))) {
      const formatValue = parseFloat(innerValue.replace(/,/g, ''))
        .toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 4, minimumFractionDigits: 0});
      this.inputElement.nativeElement.value = formatValue;
      this.value = formatValue;
      this.onChange(formatValue);
    }
  }
}
