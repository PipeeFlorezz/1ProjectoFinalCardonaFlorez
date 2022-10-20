import { Injectable } from '@angular/core';
import { Curso } from '../models/data'
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  public cursos: Curso[];

  constructor() {
      this.cursos = [{

      profesor: 'Juanita del Valle',
      nombre: 'Cocina desde casa',
      inicia: new Date(2023, 7, 19),
      finaliza: new Date(2023,9,19),
      estudiantes: [
          {
              nombre: 'Freddy',
              apellido: 'Tao',
              edad: 69,
              pais: 'Colombia',
              sexo: 'Masculino'
          },
          {
  
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
          }
          
      ],
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642366/cocina_qujbir.jpg',
      inscripcion: true
  },{
  
      profesor: 'Juan Pablo Montoya',
      nombre: 'Automotores',
      inicia: new Date(2023, 7, 19),
      finaliza: new Date(2023,9,19),
      estudiantes: [
          {
              nombre: 'Rene',
              apellido: 'Higuita',
              edad: 64,
              pais: 'Colombia',
              sexo: 'Masculino'
          },
          {
              nombre: 'Fredy',
              apellido: 'Rincon',
              edad: 74,
              pais: 'Colombia',
              sexo: 'Masculino'
          },
          
      ],
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642393/formula1_ofrsod.webp',
      inscripcion: false
  },{
  
      profesor: 'Ramiro Garcia',
      nombre: 'Trading',
      inicia: new Date(2023, 2, 25),
      finaliza: new Date(2023,5,23),
      estudiantes: [
          {
              nombre: 'Rene',
              apellido: 'Higuita',
              edad: 64,
              pais: 'Colombia',
              sexo: 'Masculino'
          },
          {
  
              nombre: 'Mauricio',
              apellido: 'Rios Velez',
              edad: 43,
              pais: 'Colombia', 
              sexo: 'Masculino'
          },
          {
              nombre: 'Manuela',
              apellido: 'Rios Velez',
              edad: 35,
              pais: 'Honduras',
              sexo: 'Femenino'
          },
          {
              nombre: 'Martha',
              apellido: 'Carmona Yepes',
              edad: 29,
              pais: 'Guatemala',
              sexo: 'Femenino'
          },
          {
              nombre: 'Freddy',
              apellido: 'Tao',
              edad: 69,
              pais: 'Colombia',
              sexo: 'Masculino'
          },
          {
              nombre: 'Pedro',
              apellido: 'Aguirre',
              edad: 39,
              pais: 'Argentina',
              sexo: 'Masculino'
          }
          
      ],
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642413/trading_raw1qk.webp',
      inscripcion: false
  },{
  
      profesor: 'Ramiro Garcia',
      nombre: 'Ejercico en Casa',
      inicia: new Date(2023, 2, 25),
      finaliza: new Date(2023,5,23),
      estudiantes: [
          {
              nombre: 'Rene',
              apellido: 'Higuita',
              edad: 64,
              pais: 'Colombia',
              sexo: 'Masculino'
          },
          {
              nombre: 'Manuela',
              apellido: 'Ramirez',
              edad: 22,
              pais: 'Colombia',
              sexo: 'Femenino'
          },
          {
  
              nombre: 'Mauricio',
              apellido: 'Rios Velez',
              edad: 43,
              pais: 'Colombia', 
              sexo: 'Masculino'
          },
          {
              nombre: 'Manuela',
              apellido: 'Rios Velez',
              edad: 35,
              pais: 'Honduras',
              sexo: 'Femenino'
          },
          {
              nombre: 'Martha',
              apellido: 'Carmona Yepes',
              edad: 29,
              pais: 'Guatemala',
              sexo: 'Femenino'
          },
          {
              nombre: 'Pedro',
              apellido: 'Aguirre',
              edad: 39,
              pais: 'Argentina',
              sexo: 'Masculino'
          }
      ],
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642456/ejercicioencasa_u3zvyf.jpg',
      inscripcion: true
  },{
  
      profesor: 'Alfredo Montañez',
      nombre: 'Quimica',
      inicia: new Date(2023, 0, 19),
      finaliza: new Date(2023,2,19),
      estudiantes: [
          {
              nombre: 'Rene',
              apellido: 'Higuita',
              edad: 64,
              pais: 'Colombia',
              sexo: 'Masculino'
          }
      ],
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642424/quimica_rtfl24.jpg',
      inscripcion: false
  },
  {
  
      profesor: 'Lucresia Ateorthua',
      nombre: 'Filosofia',
      inicia: new Date(2023, 0, 19),
      finaliza: new Date(2023,2,19),
      estudiantes: [
          {
              nombre: 'Rene',
              apellido: 'Higuita',
              edad: 64,
              pais: 'Colombia',
              sexo: 'Masculino'
          },
          {
              nombre: 'Fredy',
              apellido: 'Rincon',
              edad: 74,
              pais: 'Colombia',
              sexo: 'Masculino'
          },
          
      ],
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642434/filoosofia_km2hhx.jpg',
      inscripcion: true
  }]
   }

   llamarCursos(): Curso[]{
    return this.cursos;
   }
}
