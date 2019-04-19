import {FormControl, Validators} from '@angular/forms';

export class MoneyToExchangeControl extends FormControl {
  static validations = [Validators.required];
  private _value = '';


  constructor() {
    super('', MoneyToExchangeControl.validations);
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }


}
