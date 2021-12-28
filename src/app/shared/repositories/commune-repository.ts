import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CreateCommuneDto} from '../models/dto/commune/create-commune-dto';
import {UpdateCommuneDto} from '../models/dto/commune/update-commune-dto';
import {CommuneDetailsDto} from '../models/dto/commune/commune-details-dto';

@Injectable({ providedIn: 'root' })
export class CommuneRepository {
  COMMUNE_URL = `${environment.url}/commune`;

  constructor(private httpClient: HttpClient) {}

  createCommune(createCommuneDto: CreateCommuneDto): Promise<void> {
    return this.httpClient.post(this.COMMUNE_URL, createCommuneDto)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  updateCommune(updateCommuneDto: UpdateCommuneDto): Promise<void> {
    return this.httpClient.put(this.COMMUNE_URL, updateCommuneDto)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getAllCommuneDetails(): Promise<Array<CommuneDetailsDto>>{
    return this.httpClient.get(this.COMMUNE_URL)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getCommuneDetails(id: string): Promise<CommuneDetailsDto> {
    return this.httpClient.get(`${this.COMMUNE_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  deleteCommune(id: string): Promise<void> {
    return this.httpClient.delete(`${this.COMMUNE_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }
}
