import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "patient",
    loadChildren: () =>
      import("./patient/patient.module").then((m) => m.PatientModule),
  },
  {
    path: "rendez-vous",
    loadChildren: () =>
      import("./rendez-vous/rendez-vous.module").then(
        (m) => m.RendezVousModule
      ),
  },
  {
    path: "fiche-prestation",
    loadChildren: () =>
      import("./fiche-prestation/fiche-prestation.module").then((m) => m.FichePrestationModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionnisteRoutingModule { }
