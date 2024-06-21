import { Component } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent {
  usuario: IUsuario = {
    nombre: '',
    rol: '',
    edad: 0,
    genero: ''
  };

  guardar() {
    console.log(this.usuario);
    this.usuario = {
      nombre: '',
      rol: '',
      edad: 0,
      genero: '',
    };
  }
}
