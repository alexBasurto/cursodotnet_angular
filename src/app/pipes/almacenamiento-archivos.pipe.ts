import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'almacenamientoArchivos'
})
export class AlmacenamientoArchivosPipe implements PipeTransform {
  // transform(pesoBytes: number): string {
  //   return (pesoBytes / 1024).toFixed(2) + ' Kb';
  // }
  transform(pesoBytes: number): number {
    return pesoBytes / 1024;
  }
}
