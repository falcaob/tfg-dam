import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgendaComponent } from './pages/agenda/agenda.component';

export const routes: Routes = [

    { 
        path: '',
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: 'agenda', 
        component: AgendaComponent
    },
    
];
