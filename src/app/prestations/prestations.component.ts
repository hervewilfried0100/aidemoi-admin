import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PrestationDetailsDto} from '../shared/models/dto/prestation/prestation-details-dto';
import {PrestationService} from './prestation.service';
import {MatDialog} from '@angular/material/dialog';
import {PrestationDialogComponent} from './partials/prestation-dialog/prestation-dialog.component';
import {CommonConstants} from '../shared/constants/common-constants';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.css']
})
export class PrestationsComponent implements OnInit {
  prestations$: Observable<PrestationDetailsDto[]>;

  constructor(
    private dialog: MatDialog,
    private prestationService: PrestationService) { }

  ngOnInit(): void {
    this.recupererPrestations();
  }

  recupererPrestations(): void {
    this.prestationService.recupererPrestations();
    this.prestations$ = this.prestationService.prestations;
  }

  ouvrirPrestationDialog(): void {
    this.dialog.open(PrestationDialogComponent, {
      width: CommonConstants.MODAL_WIDTH
    });
  }

  modifierPrestation(): void {}

  supprimerPrestation(data?: PrestationDetailsDto): void {
    this.prestationService.supprimerPrestation(data?.id);
  }
}
