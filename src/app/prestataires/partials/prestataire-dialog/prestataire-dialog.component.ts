import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrestataireService} from '../../prestataire.service';
import {CreatePrestataireDto} from '../../../shared/models/dto/prestataire/create-prestataire-dto';
import {PrestationService} from '../../../prestations/prestation.service';
import {LocalisationsService} from '../../../localisations/localisations.service';
import {Observable} from 'rxjs';
import {CommuneEssentielDto} from '../../../shared/models/dto/commune/commune-essentiel-dto';
import {QuartierDetailsDto} from '../../../shared/models/dto/quartier/quartier-details-dto';
import {VilleDetailsDto} from '../../../shared/models/dto/ville/ville-details-dto';
import {PrestationDetailsDto} from '../../../shared/models/dto/prestation/prestation-details-dto';

@Component({
  selector: 'app-prestataire-dialog',
  templateUrl: './prestataire-dialog.component.html',
  styleUrls: ['./prestataire-dialog.component.css']
})
export class PrestataireDialogComponent implements OnInit {
  prestataireForm: FormGroup;
  constructor(
    private prestataireService: PrestataireService,
    private prestationService: PrestationService,
    private localisationService: LocalisationsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.recupererDonneesOptions();
  }

  initForm(): void {
    this.prestataireForm = this.fb.group({
      nom: [null, Validators.required],
      prenoms: [null, Validators.required],
      genre: [null, Validators.required],
      telephone: [null, Validators.required],
      ville: [null, Validators.required],
      commune: [null, Validators.required],
      quartier: [null, Validators.required],
      adresse: [null, Validators.required],
      aPayer: [false],
      prestation: [null, Validators.required],
      dateCreation: [null]
    });
  }

  enregistrer(): void {
    this.prestataireService.creerPrestataire(this.formValue);
  }

  get formValue(): CreatePrestataireDto {
    if (this.prestataireForm.valid) {
      return new CreatePrestataireDto(this.prestataireForm.value);
    }
  }

  recupererDonneesOptions(): void{
    this.localisationService.recupererCommunes();
    this.localisationService.recupererQuartiers();
    this.localisationService.recupererVilles();
    this.prestationService.recupererPrestations();
  }

  get communesOptions(): Observable<CommuneEssentielDto[]>{
    return this.localisationService.communes;
  }

  get quartiersOptions(): Observable<QuartierDetailsDto[]>{
    return this.localisationService.quartiers;
  }

  get villesOptions(): Observable<VilleDetailsDto[]> {
    return this.localisationService.villes;
  }

  get prestationsOptions(): Observable<PrestationDetailsDto[]>{
    return this.prestationService.prestations;
  }
}
