import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';



@NgModule({
  declarations: [
    AddPatientComponent,
    AllPatientsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
