import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacienteComponent } from './paciente/paciente.component';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { MatCardModule, MatPaginatorModule,
   MatTableModule,MatToolbarModule,MatInputModule
   ,MatButtonModule,    MatSortModule,MatDatepickerModule} from 
   '@angular/material';
   import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { RegionsListComponent } from './regions-list/regions-list.component';
import { RegionsFormComponent } from './regions-form/regions-form.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';
import { MatSelectModule } from '@angular/material/select';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsFormComponent } from './locations-form/locations-form.component';

//Registro de todos los componentes
@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    PacienteListaComponent,
    RegionsListComponent,
    RegionsFormComponent,
    CountryListComponent,
    CountryFormComponent,
    LocationsListComponent,
    LocationsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule, 
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule


    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
