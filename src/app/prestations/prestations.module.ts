import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestationsRoutingModule } from './prestations-routing.module';
import {PrestationsComponent} from './prestations.component';
import {SharedModule} from '../shared/shared.module';
import {PrestationDialogComponent} from './partials/prestation-dialog/prestation-dialog.component';


@NgModule({
  declarations: [
    PrestationsComponent,
    PrestationDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
