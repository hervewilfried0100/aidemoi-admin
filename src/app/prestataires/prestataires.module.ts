import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestatairesRoutingModule } from './prestataires-routing.module';
import {PrestatairesComponent} from './prestataires.component';
import {SharedModule} from '../shared/shared.module';
import {PrestataireDialogComponent} from './partials/prestataire-dialog/prestataire-dialog.component';


@NgModule({
  declarations: [
    PrestatairesComponent,
    PrestataireDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrestatairesRoutingModule
  ],
  exports: [
    PrestataireDialogComponent
  ]
})
export class PrestatairesModule { }
