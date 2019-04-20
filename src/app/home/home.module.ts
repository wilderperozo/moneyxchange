import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {InputExchangeComponent} from './components/input-exchange/input-exchange.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExchangeService} from './services/exchange.service';
import {HttpClientModule} from '@angular/common/http';
import {ServicesModule} from '../shared/services/services.module';
import {CommonsComponentsModule} from '../shared/components/commonsComponents.module';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    InputExchangeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonsComponentsModule,
    ServicesModule,
    ToastrModule
  ],
  providers: [
    ExchangeService
  ]
})
export class HomeModule {
}
