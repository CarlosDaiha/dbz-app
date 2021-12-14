import { Component, OnInit } from '@angular/core';
import { Personaje } from '../personajes/personaje';
import { PersonajeService } from '../personajes/personaje.service';

@Component({
  selector: 'app-por-nombre',
  templateUrl: './por-nombre.component.html',
  styles: [
  ]
})
export class PorNombreComponent implements OnInit {
  public get personajes() : Personaje[] {
    return this.personajeService.personajes;
  }
  constructor(private personajeService:PersonajeService) { }

  ngOnInit(): void {
  }

}
