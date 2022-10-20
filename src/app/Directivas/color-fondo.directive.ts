import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorFondo]'
})
export class ColorFondoDirective implements OnInit{
  @Input('appColorFondo') alumnoEdad!: string

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { 

  }

  ngOnInit(): void {
    //this.alumnoEdad = this.alumnoEdad.toLocaleLowerCase();
    this.renderer
    .setStyle(this.elemento.nativeElement, 'background-color', 
    this.alumnoEdad === 'Masculino' || this.alumnoEdad === 'masculino' ? 'yellow': 'pink');
    this.renderer
    .setStyle(this.elemento.nativeElement, 'color', 
    this.alumnoEdad === 'Masculino' || this.alumnoEdad === 'masculino' ? 'red': 'blue');
  }

}
