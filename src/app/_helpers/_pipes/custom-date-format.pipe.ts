import { Pipe, PipeTransform }  from '@angular/core';
import { DatePipe }             from '@angular/common';

import { Constants }            from '../../_models/constants';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any): any {
    return super.transform(value, Constants.DATE_SPECIAL_FMT);
  }

}
