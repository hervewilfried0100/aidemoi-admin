import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VilleDetailsDto} from '../../../shared/models/dto/ville/ville-details-dto';
import {LocalisationsService} from '../../localisations.service';
import {CreateVilleDto} from '../../../shared/models/dto/ville/create-ville-dto';

@Component({
  selector: 'app-ville-dialog',
  templateUrl: './ville-dialog.component.html',
  styleUrls: ['./ville-dialog.component.css']
})
export class VilleDialogComponent implements OnInit {
  villeForm: FormGroup;

  constructor(
    private localisationService: LocalisationsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.villeForm = this.fb.group({
      label: [null, Validators.required],
    });
  }

  updateForm(villeDto: VilleDetailsDto): void{}

  enregistrer(): void{
    this.localisationService.creerVille(this.formValue);
  }

  get formValue(): any {
    if (this.villeForm.valid) {
      return new CreateVilleDto(this.villeForm?.value);
    }
  }
}
