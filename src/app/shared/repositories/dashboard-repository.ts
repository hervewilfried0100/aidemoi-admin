import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TotalPrestataireDto} from '../models/dto/dashboard/total-prestataire-dto';
import {TotalPrestationDto} from '../models/dto/dashboard/total-prestation-dto';

@Injectable({ providedIn: 'root' })
export class DashboardRepository {
  DASHBOARD_URL = `${environment.url}/dashboard`;

  constructor(private httpClient: HttpClient) {}

  recupererTotalPrestataire(): Promise<TotalPrestataireDto> {
    return this.httpClient.get(`${this.DASHBOARD_URL}/total-prestataire`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  recupererTotalPrestatairePayer(): Promise<TotalPrestataireDto> {
    return this.httpClient.get(`${this.DASHBOARD_URL}/total-prestataire-payer`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  recupererTotalPrestataireNonPayer(): Promise<TotalPrestataireDto> {
    return this.httpClient.get(`${this.DASHBOARD_URL}/total-prestataire-non-payer`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  recupererTotalPrestations(): Promise<TotalPrestationDto> {
    return this.httpClient.get(`${this.DASHBOARD_URL}/total-prestation`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }
}
