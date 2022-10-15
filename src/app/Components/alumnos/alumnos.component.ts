import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CrearAlumnoComponent } from '../crear-alumno/crear-alumno.component';
import { Router } from '@angular/router';
import { AlumnosService } from '../../Services/alumnos.service';
import { EliminarAlumnoComponent } from '../eliminar-alumno/eliminar-alumno.component';
import { Admin, alumno } from '../../models/data';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  public datasource: alumno[];
  public displayedColumns: string[];
  public admin: boolean;
  public alumno: boolean;
  public Admin!: Admin;
  public Alumno!: alumno;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private alumnosServicios: AlumnosService
  ) { 
    this.admin = true;
    this.alumno = false;
    this.displayedColumns  = ['nombre', 'apellido', 'edad', 'pais', 'sexo', 'accion'];
    this.datasource = this.alumnosServicios.llamarAlumnos();
  
  }

  ngOnInit(): void {
    let valorParcial: any = localStorage.getItem('datasource');
    if(valorParcial) this.datasource = JSON.parse(valorParcial);
    //console.log('Cargando componente de alumnos')
    let usuarioLogueado: any = localStorage.getItem('usuarioLogueado');
    console.log(JSON.parse(usuarioLogueado));
    let userLogueado = JSON.parse(usuarioLogueado);
    let alumno: any = this.datasource.filter((elemento) => {
      return elemento.nombre == userLogueado.nombre;
    });
    console.log(typeof alumno);
    console.log(alumno)
    if(userLogueado.nombre.toLowerCase() == 'administrador'){
      this.alumno = false;
      this.admin = true;
      console.log('Te logueaste como administrador')
    }else {
      if(alumno.length > 0){
        return;
      }{
        this.datasource.unshift(userLogueado);
        console.log(this.datasource);
        localStorage.setItem('datasource', JSON.stringify(this.datasource));
        let localValue: any = localStorage.getItem('datasource')
        this.datasource = JSON.parse(localValue);
        this.displayedColumns.pop();
        this.admin = false;
        this.alumno = true;

      }
    }
  }

  openDialog(): void {
    let dialog = this.dialog.open(CrearAlumnoComponent, {
      width: '45%',
      height: '80%'
    });

    dialog.beforeClosed().subscribe(res => {
      console.log(typeof res);
      console.log(res);
      if(res === undefined) return;
      if(res.length == 0) return;
      if(res.nombre.length == 0) return;
      let valorParcial = this.datasource.unshift({...res});
      localStorage.removeItem('datasource');
      localStorage.setItem('datasource', JSON.stringify(this.datasource));
      let localValue: any = localStorage.getItem('datasource')
      this.datasource = JSON.parse(localValue);
      console.log(this.datasource);
    })
  }

  eliminarAlumno(Alumno: alumno){
    console.log(Alumno);
    /*let valorParcial = this.datasource.filter((alum: alumno) =>{

      return alum.nombre !== element.nombre
    });
    localStorage.removeItem('datasource');
    localStorage.setItem('datasource', JSON.stringify(valorParcial));
    let valorParcial2: any = localStorage.getItem('datasource');
    if(valorParcial) this.datasource = JSON.parse(valorParcial2);

    console.log(this.datasource);*/

    let dialog = this.dialog.open(EliminarAlumnoComponent, {
      width: '30%',
      height: '30%'
    })

    dialog.beforeClosed().subscribe(res => {
      console.log(res);
      console.log(typeof res);
      if(res === undefined) return;
      if(res.length === 0) return;
      if(res == '') return;
      if(res.length > 0){
        localStorage.removeItem('datasource');
        this.datasource = this.datasource.filter((elemento: any) => {
          return elemento.nombre !== Alumno.nombre;
        })
        localStorage.setItem('datasource', JSON.stringify(this.datasource));

      }
    })

  }

}
