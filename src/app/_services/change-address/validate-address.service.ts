import { Injectable } from '@angular/core';

@Injectable()
export class ValidateAddressService {

  private address: any;

  constructor() { }

  setAddress(address){
    this.address = address;
  }

  getAddress(){
    return this.address;
  }

}
