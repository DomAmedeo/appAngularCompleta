import { Routes } from '@angular/router';
import { ElencaShippers } from './components/elenca-shippers/elenca-shippers';
import { RicercaShippers } from './components/ricerca-shippers/ricerca-shippers';
import { InserimentoShippers } from './components/inserimento-shippers/inserimento-shippers';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'shippers/elenca',
        pathMatch: 'full'
    }
    ,
    {
        path:'shippers/elenca',
        component: ElencaShippers
    },
    {
        path:'shippers/ricerca/:codice',
        component:  RicercaShippers
    },
    {
        path:'shippers/inserisci',
        component:  InserimentoShippers
    }
];
