import { Injectable } from '@angular/core';
import { alumno } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  public Alumnos: alumno[];

  constructor() { 
    this.Alumnos = [{

      nombre: 'Mauricio',
      apellido: 'Rios Velez',
      edad: 43,
      pais: 'Colombia', 
      sexo: 'Masculino'
    },{
      nombre: 'Manuela',
      apellido: 'Rios Velez',
      edad: 35,
      pais: 'Honduras',
      sexo: 'Femenino'
    },{
      nombre: 'Martha',
      apellido: 'Carmona Yepes',
      edad: 29,
      pais: 'Guatemala',
      sexo: 'Femenino'
    },{
      nombre: 'Rene',
      apellido: 'Higuita',
      edad: 64,
      pais: 'Colombia',
      sexo: 'Masculino'
    },
    {
      nombre: 'Freddy',
      apellido: 'Tao',
      edad: 69,
      pais: 'Colombia',
      sexo: 'Masculino'
    }
    ]
  }

  llamarAlumnos(): alumno[] {
    return this.Alumnos;
  }

  
}

