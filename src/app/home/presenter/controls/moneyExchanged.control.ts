import {FormControl, Validators} from '@angular/forms';

export class MoneyExchangedControl extends FormControl {
  static validations = [Validators.required];
  private _disabled = true;
  value = '';

  constructor() {
    super({value: '', disabled: false, validators: MoneyExchangedControl.validations});
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }
}
