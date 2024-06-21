import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'almacenamientoArchivosMultiple'
})
export class AlmacenamientoArchivosMultiplePipe implements PipeTransform {
  transform(bytes: number, unidad: string): number {
    switch (unidad) {
      case 'KB':
        return bytes / 1024;
      case 'MB':
        return bytes / 1024 / 1024;
      case 'GB':
        return bytes / 1024 / 1024 / 1024;
      case 'TB':
        return bytes / 1024 / 1024 / 1024 / 1024;
      default:
        return bytes;
    }
  }
}

