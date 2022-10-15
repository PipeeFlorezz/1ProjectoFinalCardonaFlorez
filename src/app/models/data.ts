export interface alumno {
    nombre: String,
    apellido: String,
    edad: Number,
    pais: String,
    sexo: String
}



export interface Curso {
    profesor: String,
    nombre: String,
    inicia: Date,
    finaliza: Date,
    estudiantes: alumno[],
    imagen: String
}

export interface Admin {
    nombre: String,
    clave: String
}


