import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params }         from '@angular/router';
import { Observable }                     from 'rxjs';
import { switchMap }                      from 'rxjs/operators';
import { CreateNewPasswordFormService }   from '../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';



@Component({
  selector: 'app-signup-process',
  templateUrl: './signup-process.component.html',
  styleUrls: ['./signup-process.component.scss']
})
export class SignupProcessComponent implements OnInit {
  createNewPassword:                      any[];
  whereInTheProcess:                      string;

  constructor( 
    private activatedRoute:               ActivatedRoute,
    service:                              CreateNewPasswordFormService
  ) {
      this.createNewPassword = service.getInputs();
     }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.whereInTheProcess = params['parm'];
    });
  }

}
