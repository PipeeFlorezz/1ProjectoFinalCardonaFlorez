import { style } from '@angular/animations';
import { Component, NgModuleFactory, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, FormGroup, NgForm } from '@angular/forms'
import { Admin, alumno } from '../../models/data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  public admin: Admin;
  public alumno: alumno;
  public Admin!: boolean;
  public Alumno!: boolean;
  public primerForm: boolean;
  public Usuario!: string;

  constructor(
    private router: Router
  ) { 
    this.admin = {nombre: '', clave: ''};
    this.alumno = {nombre: '', apellido: '', edad: 0, pais: '', sexo: ''}
    this.primerForm = true;

  }

  ngOnInit(): void {
  }

  formUsuario(primerForm: NgForm){
    console.log(primerForm.value.Usuario);
    let tipoUsuario = this.Usuario.toLowerCase()


    console.log(this.Usuario, tipoUsuario);
    if(tipoUsuario == 'administrador'){
      this.primerForm = false;
      this.Alumno = false;
      this.Admin = true;
    }else if(tipoUsuario == 'alumno'){
      this.primerForm = false;
      this.Alumno = true;
      this.Admin = false;
    }


  }

  adminForm(adminForm: NgForm){
    console.log(this.admin);
    console.log(adminForm.value);
    this.primerForm = false;
    this.Alumno = false;
    this.Admin = false;  
    this.alumno.nombre = 'No hay alumno';
    if(this.alumno.nombre == 'No hay alumno'){
      localStorage.setItem('usuarioLogueado', JSON.stringify(this.admin));
    }
    setTimeout(() => {
      document.querySelector('.acceder')?.classList.remove('acceder');
    }, 300);
    this.router.navigate(['/alumnos']);
  }
  

  formAlumno(alumnoForm: NgForm){
    console.log(this.alumno);
    console.log(alumnoForm.value);
    this.primerForm = false;
    this.Alumno = false;
    this.Admin = false;
    this.admin.nombre = 'No hay administrador';
    if(this.admin.nombre === 'No hay administrador'){
      localStorage.setItem('usuarioLogueado', JSON.stringify(this.alumno));
    }
    setTimeout(() => {
      document.querySelector('.acceder')?.classList.remove('acceder');
    }, 300);
    this.router.navigate(['/alumnos']);
  }

}
