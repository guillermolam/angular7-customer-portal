import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(phoneNumber: any, args?: boolean): any {
    if(phoneNumber){
      let phone = phoneNumber.toString();
      if(args){
        console.log(phone);
        phone = phone.replace(/[^0-9]/g,"");
        if(phone.length<=3){
          return phone.replace(/(\d{3})/,"($1)");
        }else if (phone.length>3 && phone.length<=6){
          return phone.replace(/(\d{3})(\d{3})/,"($1)$2");
        }else if (phone.length>6 && phone.length<=10){
          return phone.replace(/(\d{3})(\d{3})(\d{4})/,"($1)$2-$3");
        }
      }else {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/,"$1.$2.$3");
      }
    }
  }
}
