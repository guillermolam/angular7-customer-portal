import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  constructor() {}

  displayError(error: HttpErrorResponse){
    
  }

}
