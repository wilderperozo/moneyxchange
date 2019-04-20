import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleService} from './schedule.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class ServicesModule {

  public static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [ScheduleService]
    };
  }
}
