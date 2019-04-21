import {FormControl, Validators} from '@angular/forms';

export class MoneyToExchangeControl extends FormControl {
  static validations = [Validators.required];
  value = '';


  constructor() {
    super('', MoneyToExchangeControl.validations);
  }

}
