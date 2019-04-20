import {Injectable} from '@angular/core';
import {interval, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ScheduleService {
  calculatorTimer(): Observable<Date> {
    return interval(10 * 60 * 1000).pipe(map(() => {
      return new Date();
    }));
  }
}
