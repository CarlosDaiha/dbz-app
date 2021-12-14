import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './dbz/pages/carrusel/carrusel.component';
import { ContactaComponent } from './dbz/pages/contacta/contacta.component';
import { PersonajesComponent } from './dbz/pages/personajes/personajes.component';
import { PorNombreComponent } from './dbz/pages/por-nombre/por-nombre.component';
import { PorStatusComponent } from './dbz/pages/por-status/por-status.component';

const routes: Routes = [
  {
    path: '',
    component: PersonajesComponent,
    children: [
      { path: 'nombre', component: PorNombreComponent},
      { path: 'status', component: PorStatusComponent }
    ]
  },
  {
    path: 'carrusel',
    component: CarruselComponent
  },
  {
    path: 'contacta',
    component: ContactaComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
