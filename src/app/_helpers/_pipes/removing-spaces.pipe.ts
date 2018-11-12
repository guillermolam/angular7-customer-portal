import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'removingSpaces'
})
export class RemovingSpacesPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: any, args?: any): any {
    let output;
    output = value.replace(/[^a-zA-Z0-9 ]/g, '');
    return output.replace(/\s/g, '%20') ;
  }

}
