import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { AlumnosComponent } from './Components/alumnos/alumnos.component';
import { CursosComponent } from './Components/cursos/cursos.component';
import { MaterialModule } from './MaterialModule/material.module';
import { CrearAlumnoComponent } from './Components/crear-alumno/crear-alumno.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CursoProfileComponent } from './Components/curso-profile/curso-profile.component';
import { InscribirEstudianteComponent } from './Components/inscribir-estudiante/inscribir-estudiante.component';
import { EliminarAlumnoComponent } from './Components/eliminar-alumno/eliminar-alumno.component';
import { RegistroLoginComponent } from './Components/registro-login/registro-login.component';
import { BooleanTextoPipe } from './Pipes/boolean-texto.pipe';
import { ColorFondoDirective } from './Directivas/color-fondo.directive';
import { EditarCursoComponent } from './Components/editar-curso/editar-curso.component';
import { EliminarCursoComponent } from './Components/eliminar-curso/eliminar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlumnosComponent,
    CursosComponent,
    CrearAlumnoComponent,
    CursoProfileComponent,
    InscribirEstudianteComponent,
    EliminarAlumnoComponent,
    RegistroLoginComponent,
    BooleanTextoPipe,
    ColorFondoDirective,
    EditarCursoComponent,
    EliminarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
