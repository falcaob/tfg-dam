import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { 
        path: 'mi-pagina', 
        component: HomeComponent 
    },
    { 
        path: '',
        redirectTo: '/mi-pagina', 
        pathMatch: 'full' 
    }
];
