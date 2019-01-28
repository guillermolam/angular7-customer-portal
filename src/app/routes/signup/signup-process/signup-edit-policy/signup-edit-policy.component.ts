import { Component, OnInit } from '@angular/core';
import { EditPolicyService } from '../../../../_services/forms/create-account/edit-policy.service';

@Component({
  selector: 'app-signup-edit-policy',
  templateUrl: './signup-edit-policy.component.html',
  styleUrls: ['./signup-edit-policy.component.scss']
})
export class SignupEditPolicyComponent implements OnInit {

  editPolicyInfo:                       any[];  

  constructor(
    private  editPolicyService:                  EditPolicyService,
  ) { }

  ngOnInit() {
    this.editPolicyInfo = this.editPolicyService.getInputs();

  }

}
