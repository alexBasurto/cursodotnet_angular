import { Component } from '@angular/core';
import { IAmigo } from 'src/app/interfaces/amigo.interface';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent {
  // Propiedades de amigos: nombre, ciudad, profesion,edad, aficionFavorita, mejoresAmigos
  // Para definir un tipo de datos que de soporte a un estructura, debemos crear una interface
  misAmigos: IAmigo[] = [
    {
      nombre: 'Juan Luis',
      ciudad: 'Pamplona',
      edad: 50,
      profesion: 'Desarrollador',
      aficionFavorita: 'Deportes',
      mejoresAmigos: true,
      avatar: 'https://robohash.org/necessitatibusetsit.jpg?size=50x50&set=set1'
    }
  ];

  nombre: string = '';
  ciudad = '';
  edad = 0;
  profesion = '';
  aficionFavorita = '';
  mejoresAmigos = false;
  avatar = '';

  agregarAmigo() {
    const nuevoAmigo: IAmigo = {
      nombre: this.nombre,
      ciudad: this.ciudad,
      edad: this.edad,
      profesion: this.profesion,
      aficionFavorita: this.aficionFavorita,
      mejoresAmigos: this.mejoresAmigos,
      avatar: this.avatar
    };
    this.misAmigos.push(nuevoAmigo);
    this.nombre = '';
    this.ciudad = '';
    this.edad = 0;
    this.profesion = '';
    this.aficionFavorita = '';
    this.mejoresAmigos = false;
  }

  eliminarAmigo(posicion: number) {
    this.misAmigos.splice(posicion, 1);
  }

  cambiarGradoAmistad(posicion: number) {
    this.misAmigos[posicion].mejoresAmigos = !this.misAmigos[posicion].mejoresAmigos;
  }
}
