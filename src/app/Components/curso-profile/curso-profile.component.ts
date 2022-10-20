import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosService } from '../../Services/cursos.service';
import { alumno, Curso } from '../../models/data'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InscribirEstudianteComponent } from '../inscribir-estudiante/inscribir-estudiante.component'
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-curso-profile',
  templateUrl: './curso-profile.component.html',
  styleUrls: ['./curso-profile.component.css']
})
export class CursoProfileComponent implements OnInit {

  public cursos: Curso[];
  public curso: Curso;
  public estudiantes!: alumno[];
  public displayedColumns: string[];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {
    this.displayedColumns = ['nombre', 'apellido', 'edad', 'pais', 'sexo'];
    this.cursos = this.cursosService.llamarCursos();
    this.curso = {
      profesor: '', nombre: '',
      inicia: new Date(),
      finaliza: new Date(),
      estudiantes: [{ nombre: '', apellido: '', edad: 0, pais: '', sexo: '' }],
      imagen: '',
      inscripcion: true
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log(params['nombre']);
      console.log(this.cursos);

      let curso: any = this.cursos.find((elemento: Curso) => {
        return elemento.nombre == params['nombre']
      });

      this.curso = curso;
      this.estudiantes = this.curso.estudiantes;
      console.log(this.curso);

    });
  }

  openDialog(): void {
    let dialog = this.dialog.open(InscribirEstudianteComponent, {
      width: '45%',
      height: '80%'
    });

    dialog.beforeClosed().subscribe(res => {
      console.log(res);
      console.log(typeof res)
      if(res === undefined) return;
      if(res.length == 0) return;
      if(res.nombre.length == 0) return;
      this.estudiantes.unshift(res);
      let estudiantes: alumno[] = this.estudiantes;
      localStorage.setItem('estudiantes' + this.curso.nombre.toUpperCase(), JSON.stringify(estudiantes));
      let data: any = localStorage.getItem('estudiantes' + this.curso.nombre.toUpperCase());
      console.log(data);
      this.estudiantes = JSON.parse(data);
      this.curso.estudiantes = this.estudiantes;
      //this.router.navigate(['/cursoPerfil/', this.curso.nombre]);
    })
  }
}
