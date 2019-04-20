import {FormControl, Validators} from '@angular/forms';

export class MoneyExchangedControl extends FormControl {
  static validations = [Validators.required];
  private _value: string | number = '';
  private _disabled = true;

  constructor() {
    super({value: '', disabled: false, validators: MoneyExchangedControl.validations});
  }

  get value(): string | number {
    return this._value;
  }

  set value(value: string | number) {
    this._value = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }
}
