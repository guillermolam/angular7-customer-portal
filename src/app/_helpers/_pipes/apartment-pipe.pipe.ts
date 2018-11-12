import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apartmentPipe'
})
export class ApartmentPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let output = value;
    if (args == 'only-apartment') {
      // outputting just the apartment
      output = output.slice();
    }
    else {
      // removing the apartment
      output = output.replace();
    }
    return output;
  }

}
