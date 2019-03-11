import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewableExtension'
})
export class ViewableExtensionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let stringSplit =   [],
        newString:      string;

    if (value.includes(';')) {
      stringSplit =       value.split(';');
      newString =         `${stringSplit[0]} ext ${stringSplit[1]}`;
    }
    else {
      return value;
    }
    
    return newString;
  }

}
