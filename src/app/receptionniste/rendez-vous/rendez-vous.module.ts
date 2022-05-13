import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { AddRdvComponent } from './add-rdv/add-rdv.component';
import { AllRdvComponent } from './all-rdv/all-rdv.component';


@NgModule({
  declarations: [
    AddRdvComponent,
    AllRdvComponent
  ],
  imports: [
    CommonModule,
    RendezVousRoutingModule
  ]
})
export class RendezVousModule { }
