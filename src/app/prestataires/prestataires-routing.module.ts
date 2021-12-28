import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrestatairesComponent} from './prestataires.component';

const routes: Routes = [
  {
    path: '',
    component: PrestatairesComponent,
    data: {
      title: 'Prestataires',
      headerDisplay: 'none'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestatairesRoutingModule { }
