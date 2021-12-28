import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CreatePrestationDto} from '../models/dto/prestation/create-prestation-dto';
import {UpdatePrestationDto} from '../models/dto/prestation/update-prestation-dto';
import {PrestationDetailsDto} from '../models/dto/prestation/prestation-details-dto';

@Injectable({ providedIn: 'root' })
export class PrestationRepository {
  PRESTATION_URL = `${environment.url}/prestation`;

  constructor(private httpClient: HttpClient) {}

  createPrestation(createPrestationDto: CreatePrestationDto): Promise<void> {
    return this.httpClient.post(this.PRESTATION_URL, createPrestationDto)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  updatePrestation(updatePrestationDto: UpdatePrestationDto, prestationId): Promise<void> {
    return this.httpClient.put(`${this.PRESTATION_URL}/${prestationId}`, updatePrestationDto)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getAllPrestationDetails(): Promise<Array<PrestationDetailsDto>>{
    return this.httpClient.get(this.PRESTATION_URL)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getPrestationDetails(id: string): Promise<PrestationDetailsDto> {
    return this.httpClient.get(`${this.PRESTATION_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  deletePrestation(id: string): Promise<void> {
    return this.httpClient.delete(`${this.PRESTATION_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }
}
