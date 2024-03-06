import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'Textify',
        loadComponent: () => import('./domains/home/home.component').then(c => c.HomeComponent)
    },
];
