import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Persona } from '../ApoyoEconomico/models/persona';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
  get(): Persona[]{
    return JSON.parse(localStorage.getItem('informacion'));
  }

  post(persona:Persona){
    let personas:Persona[]=[];
    if(this.get()!=null){
      personas=this.get();
    }
    personas.push(persona);
    localStorage.setItem('informacion', JSON.stringify(personas));
  }
}
