import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreatePrestationDto} from '../../../shared/models/dto/prestation/create-prestation-dto';
import {PrestationService} from '../../prestation.service';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-prestation-dialog',
  templateUrl: './prestation-dialog.component.html',
  styleUrls: ['./prestation-dialog.component.css']
})
export class PrestationDialogComponent implements OnInit {
  prestationForm: FormGroup;
  fileList: NzUploadFile[] = [];
  uploading = false;
  PRESTATION_URL = `${environment.url}/prestation`;
  constructor(
    private httpClient: HttpClient,
    private prestationService: PrestationService,
    private fb: FormBuilder) { }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  }

  handleUpload(): void {
    const formData = new FormData();
    const file: any = this.fileList[0];
    this.prestationForm.patchValue({
      imageUrl: file
    });
    this.prestationForm.get('imageUrl').updateValueAndValidity();
    formData.append('label', this.prestationLabel);
    formData.append('image', this.prestationImageUrl);
    this.prestationService.creerPrestation(formData);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.prestationForm = this.fb.group({
      label: [null, Validators.required],
      imageUrl: [null, Validators.required]
    });
  }

/*  uploadFile(event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.prestationForm.patchValue({
      imageUrl: file
    });
    this.prestationForm.get('imageUrl').updateValueAndValidity();
  }*/

  get prestationLabel(): string {
    return this.prestationForm.get('label').value;
  }

  get prestationImageUrl(): any {
    return this.prestationForm.get('imageUrl').value;
  }

  get formValue(): CreatePrestationDto{
    if (this.prestationForm.valid) {
      return new CreatePrestationDto(this.prestationForm.value);
    }
  }
}
