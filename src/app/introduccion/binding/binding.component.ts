import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  nombre = 'Juan Luis';
  n1: number = 2;
  n2 = 3;
  logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png';
  verImagen = true;
  input = true;
  logoCircular = false;
  texto = '';
  name = '';
  lastname = '';
  score :number | null=null;

  

  cambiarNombre() {
    if (this.nombre === 'Juan Luis') {
      this.nombre = 'Pedro';
    } else {
      this.nombre = 'Juan Luis';
    }
  }

  mostrarOcultarImagen() {
    // if (this.verImagen === true) {
    //   this.verImagen = false;
    // } else {
    //   this.verImagen = true;
    // }
    this.verImagen = !this.verImagen;
  }

  habilitarInput() {
    this.input = !this.input;
  }

  darFormatoCircular(){
    this.logoCircular = !this.logoCircular;
  }
}
