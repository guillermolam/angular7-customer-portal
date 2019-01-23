import { Pipe, PipeTransform }            from '@angular/core';
import { FullStateToAbvHelper }           from '../../_helpers/fullstate-to-abv.service';


@Pipe({
  name: 'abvToFulstate'
})
export class AbvToFulstatePipe implements PipeTransform {
  constructor(
    private fullStateToAbvHelper:       FullStateToAbvHelper
  ) {}

  transform(value: any, args?: any): any {
    return this.fullStateToAbvHelper.abvToFullState(value);
  }

}
