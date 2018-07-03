import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormTestingService {

  constructor() { }
}

//if the paramater in the url has _testing=true then inject this into the components
//within the components 