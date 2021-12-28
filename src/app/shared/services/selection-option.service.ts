import {VilleRepository} from '../repositories/ville-repository';
import {CommuneRepository} from '../repositories/commune-repository';
import {BehaviorSubject, Observable} from 'rxjs';
import {LocalisationsService} from '../../localisations/localisations.service';
import {map, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export class SelectOptionModel {
  label: string;
  value: string;

  constructor(data?: SelectOptionModel) {
    this.label = (data && data?.label) ? data.label : null;
    this.value = (data && data?.value) ? data.value : null;
  }
}

@Injectable({ providedIn: 'root' })
export class SelectionOptionService {
  constructor(
    private localisationService: LocalisationsService,
    private communeRepository: CommuneRepository,
    private villeRepository: VilleRepository) {
  }

  villeOptions$ = new BehaviorSubject<Array<SelectOptionModel>>([]);
  villeOptions = this.villeOptions$.asObservable();

  communeOptions$ = new BehaviorSubject<Array<SelectOptionModel>>([]);
  communeOptions = this.communeOptions$.asObservable();

  recupererVilleOptions(): Observable<SelectOptionModel[]>{
    return this.localisationService.villes
      .pipe(
        map(villeItem => villeItem?.map((ville) => {
        return new SelectOptionModel({ label: ville?.label, value: ville?.id });
      }))
      );
  }

  recupererCommuneOptions(): Observable<SelectOptionModel[]> {
    return this.localisationService.communes
      .pipe(map(communeItem => communeItem?.map((commune) => {
        return new SelectOptionModel({ label: commune?.label, value: commune?.id });
      })));
  }
}
