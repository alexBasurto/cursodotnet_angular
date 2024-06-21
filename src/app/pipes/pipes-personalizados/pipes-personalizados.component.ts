import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-personalizados',
  templateUrl: './pipes-personalizados.component.html',
  styleUrls: ['./pipes-personalizados.component.css']
})
export class PipesPersonalizadosComponent {
  metros:number = 27850.32489;
  sizeFile:number = 23023;
  archivos = [
    {
      nombre: 'Archivo 1',
      size: 5000
    },
    {
      nombre: 'Archivo 2',
      size: 10000
    },
    {
      nombre: 'Archivo 3',
      size: 20000
    },
    {
      nombre: 'Archivo 4',
      size: 30000
    }
  ];

  distanciasEntreCiudades = [
    {
      origen: 'Córdoba',
      destino: 'Sevilla',
      distancia: 145000
    },
    {
      origen: 'Córdoba',
      destino: 'Granada',
      distancia: 200000
    },
    {
      origen: 'Jaén',
      destino: 'Cádiz',
      distancia: 200000
    },
    {
      origen: 'Huelva',
      destino: 'Málaga',
      distancia: 275000
    }
  ];
  comerciales = [
    {
      nombre: 'Juan',
      ventas: 970
    },
    {
      nombre: 'Pepe',
      ventas: 899
    },
    {
      nombre: 'Ana',
      ventas: 3000
    },
    {
      nombre: 'Luis',
      ventas: 4000
    }
  ];
}
