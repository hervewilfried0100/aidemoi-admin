import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocalisationsComponent} from './localisations.component';

const routes: Routes = [{
  path: '',
  component: LocalisationsComponent,
  data: {
    title: 'Localisations',
    headerDisplay: 'none'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalisationsRoutingModule { }
