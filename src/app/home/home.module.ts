import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from '../shared/components/footer/footer.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import { InputExchangeComponent } from './components/input-exchange/input-exchange.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    InputExchangeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule {
}
