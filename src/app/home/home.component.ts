import {Component, OnInit} from '@angular/core';
import {HomePresenter} from './presenter/home.presenter';
import {ExchangeService} from './services/exchange.service';
import {Exchange} from './models/exchange';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomePresenter]
})
export class HomeComponent implements OnInit {

  exchangeBodyResponse = {} as Exchange;
  exchanges = ['USD', 'EUR'];

  constructor(
    private exchangeService: ExchangeService,
    private presenter: HomePresenter) {
  }

  ngOnInit() {
    this.exchangeService.getExchange(this.exchanges).subscribe(response => {
      const {EUR, USD} = response.rates;
      response.exchangeInvested = {
        EUR: EUR / USD,
        USD: 1
      };
      this.exchangeBodyResponse = response;
    });
  }

  convert() {
    const valueInRaw = this.presenter.moneyToExchange.value.toString().replace(/,/g, '');
    this.presenter.moneyExchanged.setValue(parseFloat(valueInRaw) * this.exchangeBodyResponse.exchangeInvested.EUR);
  }
}
