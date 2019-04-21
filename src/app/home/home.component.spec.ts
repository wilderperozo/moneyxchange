import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
import {InputExchangeComponent} from './components/input-exchange/input-exchange.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExchangeService} from './services/exchange.service';
import {HttpClientModule} from '@angular/common/http';
import {ScheduleService} from '../shared/services/schedule.service';
import {ToastrModule} from 'ngx-toastr';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, HeaderComponent, FooterComponent, InputExchangeComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, ToastrModule.forRoot()],
      providers: [ExchangeService, ScheduleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
