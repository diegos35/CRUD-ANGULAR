import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { PacienteComponent } from './paciente/paciente.component';
import { RegionsListComponent } from './regions-list/regions-list.component';
import { RegionsFormComponent } from './regions-form/regions-form.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsFormComponent } from './locations-form/locations-form.component';


const routes: Routes = [
  {path:"regions-list", component: RegionsListComponent},
  {path:"regions", component: RegionsFormComponent},
  {path:"regions/:id", component: RegionsFormComponent},
  {path:"country-list", component: CountryListComponent},
  {path:"country", component: CountryFormComponent},
  {path:"country/:id", component: CountryFormComponent},
  {path:"location-list", component: LocationsListComponent},
  {path:"location", component: LocationsFormComponent},
  {path:"location/:id", component: LocationsFormComponent},
  // {path:"location", component: },
  // {path:"location/:id", component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
