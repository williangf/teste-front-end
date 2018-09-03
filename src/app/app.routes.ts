import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetalheComponent } from './home/detalhe/detalhe.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detalhe', component: HomeComponent },
    { path: 'detalhe/:id', component: DetalheComponent },

]