import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comisiones'
})
export class ComisionesPipe implements PipeTransform {

  transform(ventas :number): number {
    if(ventas > 1000){
      return ventas * 0.20;
    }else{
      return ventas * 0.10;
    }
  }

}
