import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {VilleDialogComponent} from './partials/ville-dialog/ville-dialog.component';
import {CommuneDialogComponent} from './partials/commune-dialog/commune-dialog.component';
import {QuartierDialogComponent} from './partials/quartier-dialog/quartier-dialog.component';
import {CommonConstants} from '../shared/constants/common-constants';
import {LocalisationsService} from './localisations.service';
import {Observable} from 'rxjs';
import {VilleDetailsDto} from '../shared/models/dto/ville/ville-details-dto';
import {CommuneDetailsDto} from '../shared/models/dto/commune/commune-details-dto';
import {QuartierDetailsDto} from '../shared/models/dto/quartier/quartier-details-dto';

@Component({
  selector: 'app-localisations',
  templateUrl: './localisations.component.html',
  styleUrls: ['./localisations.component.css']
})
export class LocalisationsComponent implements OnInit {
  villeData$: Observable<Array<VilleDetailsDto>>;
  communeData$: Observable<Array<CommuneDetailsDto>>;
  quartierData$: Observable<Array<QuartierDetailsDto>>;

  constructor(
    private localisationService: LocalisationsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.recupererVilleData();
    this.recupererCommuneData();
    this.recupererQuartierData();
  }

  supprimerVille(villeData: VilleDetailsDto): void {
    this.localisationService.supprimerVille(villeData?.id);
  }

  modifierVille(data): void {}

  supprimerCommune(data?: CommuneDetailsDto): void {
    this.localisationService.supprimerCommune(data?.id);
  }

  modifierCommune(data?: CommuneDetailsDto): void {}

  supprimerQuartier(data?: QuartierDetailsDto): void {
    this.localisationService.supprimerQuartier(data?.id);
  }

  modifierQuartier(data?: QuartierDetailsDto): void {}

  // MODALE
  ouvrirVilleModal(): void {
    this.dialog.open(VilleDialogComponent, {
      width: CommonConstants.MODAL_WIDTH
    });
  }

  ouvrirCommuneModal(): void {
    this.dialog.open(CommuneDialogComponent, {
      width: CommonConstants.MODAL_WIDTH
    });
  }

  ouvrirQuartierModal(): void {
    this.dialog.open(QuartierDialogComponent, {
      width: CommonConstants.MODAL_WIDTH
    });
  }

  // Récupérer données
  recupererVilleData(): void {
    this.localisationService.recupererVilles();
    this.villeData$ = this.localisationService.villes$;
  }

  recupererCommuneData(): void{
    this.localisationService.recupererCommunes();
    this.communeData$ = this.localisationService.communes;
  }

  recupererQuartierData(): void {
    this.quartierData$ = this.localisationService.quartiers;
    this.localisationService.recupererQuartiers();
  }
}
