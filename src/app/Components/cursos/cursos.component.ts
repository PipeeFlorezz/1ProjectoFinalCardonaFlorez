import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/data';
import { CursosService } from '../../Services/cursos.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EliminarCursoComponent } from '../eliminar-curso/eliminar-curso.component'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos!: Observable<Curso[]>
  public cursos$!: Observable<Curso[]>
  public admin!: boolean;

  constructor(
    private router: Router,
    private cursosService: CursosService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    console.log(this.cursos)
    this.cursos$ = this.cursosService.llamarCursos();
    console.log(this.cursos$);

    let res1, res2: any = localStorage.getItem('usuarioLogueado');
    console.log(JSON.parse(res2));
    res1 = JSON.parse(res2);
    res1.nombre = res1.nombre.toLocaleLowerCase();
    console.log(res1)
    if(res1.nombre == 'administrador') this.admin = true;
  }


  editarCurso(id: number) {
    this.router.navigate(['/editarCurso/', id])
  }

  eliminarCurso(id: number) {
    let dialog = this.dialog.open(EliminarCursoComponent, {
      width: '30%',
      height: '40%'
    });

    dialog.beforeClosed().subscribe(res => {
      console.log(res);
      console.log(typeof res)
      if (res === undefined) return;
      if (res.length == 0) return;
      if (res) {
        this.cursosService.eliminarCurso(id);
      }
    })

  }

  inscribirme(id: number) {
    console.log(id);
    this.router.navigate(['/cursoPerfil', id])
  }

}
