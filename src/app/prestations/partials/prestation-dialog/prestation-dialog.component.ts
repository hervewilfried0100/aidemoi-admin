import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreatePrestationDto} from '../../../shared/models/dto/prestation/create-prestation-dto';
import {PrestationService} from '../../prestation.service';

@Component({
  selector: 'app-prestation-dialog',
  templateUrl: './prestation-dialog.component.html',
  styleUrls: ['./prestation-dialog.component.css']
})
export class PrestationDialogComponent implements OnInit {
  prestationForm: FormGroup;
  constructor(
    private prestationService: PrestationService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.prestationForm = this.fb.group({
      label: [null, Validators.required]
    });
  }

  enregistrer(): void {
    this.prestationService.creerPrestation(this.formValue);
  }

  get formValue(): CreatePrestationDto{
    if (this.prestationForm.valid) {
      return new CreatePrestationDto(this.prestationForm.value);
    }
  }
}
