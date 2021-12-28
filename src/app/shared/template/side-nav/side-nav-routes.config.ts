import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: '',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
      path: 'localisations',
      title: 'Localisation',
      iconType: 'nzIcon',
      iconTheme: 'outline',
      icon: 'environment',
      submenu: []
    },
    {
      path: 'prestataires',
      title: 'Prestataires',
      iconType: 'nzIcon',
      iconTheme: 'outline',
      icon: 'user',
      submenu: []
    },
    {
      path: 'prestations',
      title: 'Prestations',
      iconType: 'nzIcon',
      iconTheme: 'outline',
      icon: 'tool',
      submenu: []
    }
];
