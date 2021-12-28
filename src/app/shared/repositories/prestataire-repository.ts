import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CreatePrestataireDto} from '../models/dto/prestataire/create-prestataire-dto';
import {UpdatePrestataireDto} from '../models/dto/prestataire/update-prestataire-dto';
import {PrestataireDetailsDto} from '../models/dto/prestataire/prestataire-details-dto';

@Injectable({ providedIn: 'root' })
export class PrestataireRepository {
  PRESTATAIRE_URL = `${environment.url}/prestataire`;

  constructor(private httpClient: HttpClient) {}

  createPrestataire(createPrestataireDto: CreatePrestataireDto): Promise<void> {
    return this.httpClient.post(this.PRESTATAIRE_URL, createPrestataireDto)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  updatePrestataire(updatePrestataire: UpdatePrestataireDto, prestataireId): Promise<void> {
    return this.httpClient.put(`${this.PRESTATAIRE_URL}/${prestataireId}`, updatePrestataire)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getAllPrestataireDetails(): Promise<Array<PrestataireDetailsDto>>{
    return this.httpClient.get(this.PRESTATAIRE_URL)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getPrestataireDetails(id: string): Promise<PrestataireDetailsDto> {
    return this.httpClient.get(`${this.PRESTATAIRE_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  deletePrestataire(id: string): Promise<void> {
    return this.httpClient.delete(`${this.PRESTATAIRE_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }
}
