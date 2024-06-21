import { Component } from '@angular/core';
import { ITarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  misTareas: ITarea[] = [
    {
      descripcion: 'Comer',
      realizada: true
    },
    {
      descripcion: 'Viajar',
      realizada: false
    },
    {
      descripcion: 'Conducir',
      realizada: true
    }
  ];

  descripcion :string ='';
  realizada :boolean = false;

  agregarTarea(){
    const nuevaTarea: ITarea = {
      descripcion: this.descripcion,
      realizada: this.realizada
    };
    this.misTareas.push(nuevaTarea);
    this.descripcion = '';
    this.realizada = false;
  }

  cambiarTarea(pos :number){
    this.misTareas[pos].realizada = !this.misTareas[pos].realizada;
  }

  eliminarTarea(pos :number){
    this.misTareas.splice(pos, 1);
  }
}
