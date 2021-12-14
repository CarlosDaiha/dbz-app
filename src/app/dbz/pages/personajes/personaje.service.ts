import { Injectable } from '@angular/core';
import { Personaje } from './personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  _personajes:Personaje[]=[
    {id:1, nombre: "Goku", status: "Vivo", especie: "Saiyan"},
    {id:2, nombre: "Vegeta", status: "Vivo", especie: "Saiyan"},
    {id:3, nombre: "Piccolo", status: "Vivo", especie: "Namekiano"},
    {id:4, nombre: "Krillin", status: "Muerto", especie: "Terrícola"},
    {id:5, nombre: "Célula", status: "Muerto", especie: "Bioandroide"},
    {id:6, nombre: "18", status: "Vivo", especie: "Androide"}
  ];
  
  constructor() { }
  
  public get personajes() : Personaje[] {
    return [...this._personajes];
  }
  
}
