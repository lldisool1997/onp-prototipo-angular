import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' }, // default: menú
  {
    path: 'menu',
    loadChildren: () =>
      import('./features/menu-principal/menu-principal.routes')
        .then(m => m.MENU_PRINCIPAL_ROUTES),
    title: 'Menú principal'
  },
  { path: '**', redirectTo: 'menu' }
];
