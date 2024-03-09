import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Textify',
        loadComponent: () => import('./domains/home/home.component').then(c => c.HomeComponent)
    },
];
