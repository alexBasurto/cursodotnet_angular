import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distancias'
})
export class DistanciasPipe implements PipeTransform {
  // Como una tubería que el pipe es, le entrará un valor (value) y devolverá otro (return ...)
  // Todos los pipes tienen el adn de pipe gracias al decorador @Pipe
  // El método transform es indispensable. Es el que le va a dar vida al pipe, el que va a hacer la
  // transformación. Como es indispensable, Angular ya lo incorpora de forma automática
  // implements PipeTransform obliga a incorporar el método transform
  // Ahora nuestro deber es desarrollar la transformación
  transform(metros: number): number {
    return metros / 1000;
  }
}