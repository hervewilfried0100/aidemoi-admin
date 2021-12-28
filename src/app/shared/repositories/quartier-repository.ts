import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CreateQuartierDto} from '../models/dto/quartier/create-quartier-dto';
import {UpdateQuartierDto} from '../models/dto/quartier/update-quartier-dto';
import {QuartierDetailsDto} from '../models/dto/quartier/quartier-details-dto';

@Injectable({ providedIn: 'root' })
export class QuartierRepository {
  QUARTIER_URL = `${environment.url}/quartier`;

  constructor(private httpClient: HttpClient) {}

  createQuartier(createQuartierDto: CreateQuartierDto): Promise<void> {
    return this.httpClient.post(this.QUARTIER_URL, createQuartierDto)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  updateQuartier(updateQuartierDto: UpdateQuartierDto): Promise<void> {
    return this.httpClient.put(this.QUARTIER_URL, updateQuartierDto)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getAllQuartierDetails(): Promise<Array<QuartierDetailsDto>>{
    return this.httpClient.get(this.QUARTIER_URL)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getQuartierDetails(id: string): Promise<QuartierDetailsDto> {
    return this.httpClient.get(`${this.QUARTIER_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  deleteQuartier(id: string): Promise<void> {
    return this.httpClient.delete(`${this.QUARTIER_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }
}
