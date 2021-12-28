import { Routes } from '@angular/router';

// tslint:disable-next-line:variable-name
export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
      path: 'prestataires',
      loadChildren: () => import('../../prestataires/prestataires.module').then(m => m.PrestatairesModule)
    },
    {
      path: 'prestations',
      loadChildren: () => import('../../prestations/prestations.module').then(m => m.PrestationsModule)
    },
    {
      path: 'localisations',
      loadChildren: () => import('../../localisations/localisations.module').then(m => m.LocalisationsModule)
    }
];
