import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-exchange',
  templateUrl: './input-exchange.component.html',
  styleUrls: ['./input-exchange.component.scss']
})
export class InputExchangeComponent {
  @ViewChild('inputExchange') inputElement;
  private _value = '';

  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    if (value.charAt(value.length - 1) !== '.' && !isNaN(parseFloat(value))) {
      this.inputElement.nativeElement.value = parseFloat(value.replace(/,/g, ''))
        .toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 4, minimumFractionDigits: 0});
    }
  }

  validateInputFormat($event: KeyboardEvent) {
    if (!new RegExp(/[0-9.,]+/).test($event.key)) {
      $event.preventDefault();
    }
  }
}
