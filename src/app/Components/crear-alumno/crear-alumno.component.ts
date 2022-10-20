import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  public formAlumno: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<CrearAlumnoComponent>
  ) {
    this.formAlumno = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      sexo: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }


  crearAlumno(){
    console.log(this.formAlumno.value);
    let sexo: any, data:any = this.formAlumno.value;
    console.log(data)
    sexo = data.sexo.toLocaleLowerCase()
    console.log(sexo);
    data.sexo = sexo;
    console.log(data)
    this.matDialogRef.close(data)
  }

}
