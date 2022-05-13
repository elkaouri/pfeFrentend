import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichePrestationRoutingModule } from './fiche-prestation-routing.module';
import { AddFicheComponent } from './add-fiche/add-fiche.component';
import { AllFicheComponent } from './all-fiche/all-fiche.component';


@NgModule({
  declarations: [
    AddFicheComponent,
    AllFicheComponent
  ],
  imports: [
    CommonModule,
    FichePrestationRoutingModule
  ]
})
export class FichePrestationModule { }
