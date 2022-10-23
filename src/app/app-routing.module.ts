import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importanndo cmpnentes para routing
import { CursosComponent } from './Components/cursos/cursos.component'
import { AlumnosComponent } from './Components/alumnos/alumnos.component'
import { CursoProfileComponent } from './Components/curso-profile/curso-profile.component'
import { RegistroLoginComponent } from './Components/registro-login/registro-login.component'
import { EditarCursoComponent } from './Components/editar-curso/editar-curso.component';

const routes: Routes = [
  {path: '', component: RegistroLoginComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'cursoPerfil/:id', component: CursoProfileComponent},
  {path: 'editarCurso/:id', component: EditarCursoComponent},
  {path: 'cursos', component: CursosComponent}];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
