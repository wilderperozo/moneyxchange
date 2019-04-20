import {Component, OnInit} from '@angular/core';
import {HomePresenter} from './presenter/home.presenter';
import {ExchangeService} from './services/exchange.service';
import {Exchange} from './models/exchange';
import {ScheduleService} from '../shared/services/schedule.service';
import {ToastrService} from 'ngx-toastr';

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
    private presenter: HomePresenter,
    private scheduleService: ScheduleService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.getExchange();
    this.scheduleService.calculatorTimer().subscribe(response => {
      this.toastr.info('Updating foreign exchanges...',
        '',
        {
          timeOut: 5000, positionClass: 'toast-bottom-right'
        });
      // this.getExchange();
    });
  }

  getExchange() {
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
