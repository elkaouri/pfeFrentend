import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from 'src/app/authentication/page404/page404.component';
import { AddFicheComponent } from './add-fiche/add-fiche.component';
import { AllFicheComponent } from './all-fiche/all-fiche.component';

const routes: Routes = [
  {
    path: 'add-fiche',
    component: AddFicheComponent,
  },
  {
    path: 'all-fiches',
    component: AllFicheComponent,
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichePrestationRoutingModule { }
