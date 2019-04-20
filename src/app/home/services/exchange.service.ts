import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Exchange} from '../models/exchange';
import {map} from 'rxjs/operators';

@Injectable()
export class ExchangeService {

  constructor(private http: HttpClient) {
  }

  /**
   * La version del 19 de abril del 2019 del API no permite cambiar el base currency (Para hacerlo tendria que pagar un plan mensual)
   * y por defecto el API trae de base el EUR, por esa razon se hace un ligero cambio a la prueba tecnica original
   * @param exchanges []
   */
  getExchange(exchanges: Array<string>) {
    return this.http.get<Exchange>(`${environment.APIURL}&symbols=${exchanges.toString()}&format=1`).pipe(map(response => {
        return response;
      }
    ));
  }

}
