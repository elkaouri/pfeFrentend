import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from 'src/app/authentication/page404/page404.component';
import { AddRdvComponent } from './add-rdv/add-rdv.component';
import { AllRdvComponent } from './all-rdv/all-rdv.component';

const routes: Routes = [
{
  path: 'add-rdv',
  component: AddRdvComponent,
},
{
  path: 'all-rdvs',
  component: AllRdvComponent,
},
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule { }
