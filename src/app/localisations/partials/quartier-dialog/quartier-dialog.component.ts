import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalisationsService} from '../../localisations.service';
import {CreateQuartierDto} from '../../../shared/models/dto/quartier/create-quartier-dto';
import {SelectionOptionService, SelectOptionModel} from '../../../shared/services/selection-option.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-quartier-dialog',
  templateUrl: './quartier-dialog.component.html',
  styleUrls: ['./quartier-dialog.component.css']
})
export class QuartierDialogComponent implements OnInit {
  quartierForm: FormGroup;
  constructor(
    private selectionOptionService: SelectionOptionService,
    private localisationService: LocalisationsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.recupererOptions();
  }

  initForm(): void{
    this.quartierForm = this.fb.group({
      label: [null, Validators.required],
      commune: [null]
    });
  }

  enregistrer(): void{
    this.localisationService.creerQuartier(this.formValue);
  }

  get formValue(): CreateQuartierDto {
    if (this.quartierForm.valid) {
      return new CreateQuartierDto(this.quartierForm.value);
    }
  }

  get communeOptions(): Observable<SelectOptionModel[]> {
    return this.selectionOptionService.recupererCommuneOptions();
  }

  recupererOptions(): void {
    this.localisationService.recupererCommunes();
  }

}
