import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from 'src/app/authentication/page404/page404.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';

const routes: Routes = [
  {
    path: 'add-patient',
    component: AddPatientComponent,
  },
  {
    path: 'all-patients',
    component: AllPatientsComponent,
  },
  { path: '**', component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
