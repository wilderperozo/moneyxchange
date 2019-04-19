import {Component, OnInit} from '@angular/core';
import {HomePresenter} from './presenter/home.presenter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomePresenter]
})
export class HomeComponent implements OnInit {

  constructor(private presenter: HomePresenter) {
  }

  ngOnInit() {
  }

  convert() {
    console.log('convert ', this.presenter.moneyToExchange);
  }
}
