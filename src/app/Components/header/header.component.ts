import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Admin, alumno } from 'src/app/models/data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck{

  public usuarioLogueado: any;
  public admin: boolean;
  public alumno: boolean;
  public Admin: Admin
  public Alumno: alumno
  constructor(
    private router: Router
  ) { 
    this.Admin = {nombre: '', clave: ''};
    this.Alumno = {id: 0, nombre: '', apellido: '', edad: 0, pais: '', sexo: ''};
    this.usuarioLogueado = {nombre: 'incognito', clave: '123'};
    this.admin = true;
    this.alumno = false;
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    console.log(this.usuarioLogueado.nombre);
    let data: any = localStorage.getItem('usuarioLogueado')
    console.log(data)
    if(!data){
      console.log('No se ha logueado nadie')
      return;
    }else{
      if(data.nombre == 'administrador'){
        this.admin = true;
        this.alumno = false;
        this.Admin = JSON.parse(data);
      }else {
        this.admin = false;
        this.alumno = true;
        this.Alumno = JSON.parse(data);
      }
      console.log(this.Admin);
      console.log(this.Alumno);
      console.log('Alguien se ha logueado')

    }

  }

  desloguearse(){
    localStorage.removeItem('usuarioLogueado');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1200);
  }

}
