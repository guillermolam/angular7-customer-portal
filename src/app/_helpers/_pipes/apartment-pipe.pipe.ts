import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apartmentPipe'
})
export class ApartmentPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
  }

}
