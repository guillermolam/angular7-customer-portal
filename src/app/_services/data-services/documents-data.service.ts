import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentsDataService {

  private documentsDetails:            any;
  private details =         new BehaviorSubject<any>(this.documentsDetails);
  $documentsDetails =          this.details.asObservable();

  constructor() {}

  updateDocumentsDetails(documentsDetails: any) {
    this.details.next(documentsDetails);
  }
}
