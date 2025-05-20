import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { CompetenciasComponent } from './pages/competencias/competencias.component';
import { ReferentesapComponent } from './pages/referentesap/referentesap.component';
import { ReferentesahComponent } from './pages/referentesah/referentesah.component';

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
    { 
        path: 'competencias', 
        component: CompetenciasComponent
    },
    { 
        path: 'referentes-ap', 
        component: ReferentesapComponent
    },
    { 
        path: 'referentes-ah', 
        component: ReferentesahComponent
    },
    { 
        path: 'contacto', 
        component: AgendaComponent
    },
];
