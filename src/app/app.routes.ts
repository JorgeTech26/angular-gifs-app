import { Routes } from '@angular/router';
import { HomePage } from './gifs/pages/home-page/home-page';

export const routes: Routes = [
  {
    path: 'gifs',
    component: HomePage,
  },
  {
    path: 'buscar-gif',
    loadComponent: () => import('./gifs/pages/search-page/search-page').then((m) => m.SearchPage),
  },
  {
    path: '**',
    redirectTo: 'gifs',
  },
];
