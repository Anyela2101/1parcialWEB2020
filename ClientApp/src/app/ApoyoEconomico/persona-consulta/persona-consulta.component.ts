import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {
  personas:Persona[];
  searchText: string;
  constructor() { }

  ngOnInit(): void {
    this.personas=[
      
    ]
  }

}
