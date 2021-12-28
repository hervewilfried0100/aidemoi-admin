import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalisationsRoutingModule } from './localisations-routing.module';
import {LocalisationsComponent} from './localisations.component';
import {SharedModule} from '../shared/shared.module';
import {VilleDialogComponent} from './partials/ville-dialog/ville-dialog.component';
import {QuartierDialogComponent} from './partials/quartier-dialog/quartier-dialog.component';
import {CommuneDialogComponent} from './partials/commune-dialog/commune-dialog.component';
import {SelectionOptionService} from '../shared/services/selection-option.service';


@NgModule({
  declarations: [
    LocalisationsComponent,
    VilleDialogComponent,
    QuartierDialogComponent,
    CommuneDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LocalisationsRoutingModule
  ],
  exports: [
    LocalisationsComponent,
    VilleDialogComponent,
    QuartierDialogComponent,
    CommuneDialogComponent
  ],
  providers: [SelectionOptionService]
})
export class LocalisationsModule { }
