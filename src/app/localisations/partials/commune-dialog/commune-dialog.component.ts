import { Component, OnInit } from '@angular/core';
import {LocalisationsService} from '../../localisations.service';
import {SelectionOptionService, SelectOptionModel} from '../../../shared/services/selection-option.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateCommuneDto} from '../../../shared/models/dto/commune/create-commune-dto';
import {CommuneDetailsDto} from '../../../shared/models/dto/commune/commune-details-dto';

@Component({
  selector: 'app-commune-dialog',
  templateUrl: './commune-dialog.component.html',
  styleUrls: ['./commune-dialog.component.css']
})
export class CommuneDialogComponent implements OnInit {
  communeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private selectionOptions: SelectionOptionService,
    private localisationService: LocalisationsService) { }

  ngOnInit(): void {
    this.initForm();
    this.recupererOptionsData();
  }

  initForm(): void{
    this.communeForm = this.fb.group({
      label: [null, Validators.required],
      ville: [null]
    });
  }

  recupererOptionsData(): void {
    this.localisationService.recupererVilles();
  }

  enregistrer(): void {
    this.localisationService.creerCommune(this.formValue);
  }

  supprimer(data?: CommuneDetailsDto): void {
    this.localisationService.supprimerCommune(data?.id);
  }

  get villeOptions(): Observable<SelectOptionModel[]>{
    return this.selectionOptions.recupererVilleOptions();
  }

  get formValue(): CreateCommuneDto {
    if (this.communeForm.valid) {
      return new CreateCommuneDto(this.communeForm.value);
    }
  }
}
