import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrestationsComponent} from './prestations.component';

const routes: Routes = [
  {
    path: '',
    component: PrestationsComponent,
    data: {
      title: 'Prestations',
      headerDisplay: 'none'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
