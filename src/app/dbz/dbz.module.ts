import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './pages/carrusel/carrusel.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { PorStatusComponent } from './pages/por-status/por-status.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CarruselComponent,
    PersonajesComponent,
    PorNombreComponent,
    PorStatusComponent,
    ContactaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CarruselComponent,
    PersonajesComponent
  ]
})
export class DbzModule { }
