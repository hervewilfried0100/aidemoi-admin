import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PrestataireDialogComponent} from './partials/prestataire-dialog/prestataire-dialog.component';
import {CommonConstants} from '../shared/constants/common-constants';
import {Observable} from 'rxjs';
import {PrestataireDetailsDto} from '../shared/models/dto/prestataire/prestataire-details-dto';
import {PrestataireService} from './prestataire.service';

@Component({
  selector: 'app-prestataires',
  templateUrl: './prestataires.component.html',
  styleUrls: ['./prestataires.component.css']
})
export class PrestatairesComponent implements OnInit {
  prestataires$: Observable<PrestataireDetailsDto[]>;
  constructor(
    private prestataireService: PrestataireService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.recupererPrestataire();
  }

  ouvrirPrestataireDialog(): void {
    this.dialog.open(PrestataireDialogComponent, {
      width: CommonConstants.LARGE_MODAL_WIDTH
    });
  }

  recupererPrestataire(): void {
    this.prestataireService.recupererPrestataires();
    this.prestataires$ = this.prestataireService.prestataires;
  }

  supprimerPrestataire(data?: PrestataireDetailsDto): void {
    this.prestataireService.supprimerPrestataire(data?.id);
  }

}
