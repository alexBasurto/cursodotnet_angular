import { Component } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente.interface';


@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent {
  cliente :ICliente = {
    nombre: '',
    categoria: '',
    email: '',
    facturacionAnual: 0,
    localidad: '',
    moroso: false
  }

  
  categorias = [
    { value: 'home', display: 'Hogar' },
    { value: 'food', display: 'Alimentación' },
    { value: 'tech', display: 'Tecnología' }
  ];

  guardar(){
    console.log(this.cliente);
    this.cliente = {
      nombre: '',
      categoria: '',
      email: '',
      facturacionAnual: 0,
      localidad: ''
    }
  }

  isEmailValid(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
