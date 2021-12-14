import { Component, OnInit } from '@angular/core';
import { Personaje } from './personaje';
import { PersonajeService } from './personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent implements OnInit {

  constructor(private personajeService:PersonajeService) { }
  
  public get personajes() : Personaje[] {
    return this.personajeService.personajes;
  }
  
  ngOnInit(): void {
  }

}
