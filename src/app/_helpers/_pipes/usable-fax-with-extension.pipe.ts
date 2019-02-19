import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usableFaxWithExtension'
})
export class UsableFaxWithExtensionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let stringSplit =   [],
        newString:      string;

    stringSplit =       value.split(' ');
    newString =         `${stringSplit[0]},${stringSplit[2]}`;
    return newString;
  }

}
