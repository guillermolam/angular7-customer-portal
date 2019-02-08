import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documentType'
})
export class DocumentTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.charAt(0);

  }

}
