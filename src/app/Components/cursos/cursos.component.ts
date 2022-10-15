import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/data';
import { CursosService } from '../../Services/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos: Curso[];

  constructor(
    private router: Router,
    private cursosService: CursosService
  ) {
    this.cursos = this.cursosService.llamarCursos();
   }

  ngOnInit(): void {
    console.log(this.cursos)
  }

  inscribirme(curso: any){
    console.log(curso);
    this.router.navigate(['/cursoPerfil', curso])
  }

}
