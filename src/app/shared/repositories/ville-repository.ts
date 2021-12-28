import {Injectable} from '@angular/core';
import {CreateVilleDto} from '../models/dto/ville/create-ville-dto';
import {UpdateVilleDto} from '../models/dto/ville/update-ville-dto';
import {VilleDetailsDto} from '../models/dto/ville/ville-details-dto';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class VilleRepository {
  VILLE_URL = `${environment.url}/ville`;

  constructor(private httpClient: HttpClient) {}

  createVille(createVilleDto: CreateVilleDto): Promise<void> {
    return this.httpClient.post(this.VILLE_URL, createVilleDto)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  updateVille(updateVilleDto: UpdateVilleDto): Promise<void> {
    return this.httpClient.put(this.VILLE_URL, updateVilleDto)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getAllVilleDetails(): Promise<Array<VilleDetailsDto>>{
    return this.httpClient.get(this.VILLE_URL)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  getVilleDetails(id: string): Promise<VilleDetailsDto> {
    return this.httpClient.get(`${this.VILLE_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }

  deleteVille(id: string): Promise<void> {
    return this.httpClient.delete(`${this.VILLE_URL}/${id}`)
      .pipe(map((item: any) => {
        if (item.body) {
          return item.body ? item.body : item;
        } else {
          return item;
        }
      })).toPromise();
  }
}
