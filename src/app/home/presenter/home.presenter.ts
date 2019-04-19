import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MoneyToExchangeControl} from './controls/moneyToExchange.control';
import {MoneyExchangedControl} from './controls/moneyExchanged.control';

@Injectable()
export class HomePresenter {
  private _form: FormGroup;
  private _moneyToExchange = new MoneyToExchangeControl();
  private _moneyExchanged = new MoneyExchangedControl();

  constructor() {
    this.form = new FormGroup({
      moneyToExchange: this.moneyToExchange,
      moneyExchanged: this.moneyExchanged
    });
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

  get moneyToExchange(): MoneyToExchangeControl {
    return this._moneyToExchange;
  }

  set moneyToExchange(value: MoneyToExchangeControl) {
    this._moneyToExchange = value;
  }

  get moneyExchanged(): MoneyExchangedControl {
    return this._moneyExchanged;
  }

  set moneyExchanged(value: MoneyExchangedControl) {
    this._moneyExchanged = value;
  }

}
