import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AddPolicyService } from './../../../../../../_services/forms/create-account/add-policy.service';
import { ModalOptions } from 'mapfre-design-library';
import { UserService } from './../../../../../../_services/user.service';

@Component({
  selector: 'app-link-policy',
  templateUrl: './link-policy.component.html',
  styleUrls: ['./link-policy.component.scss']
})
export class LinkPolicyComponent implements OnInit {

  whereToFindModalOptions:             ModalOptions;
  linkPolicy: any[];
  user:  any;

  constructor(
    private router: Router,
    policyService:                     AddPolicyService,
    private userService: UserService
  ) { 
    this.linkPolicy = policyService.getInputs();
    this.whereToFindModalOptions = new ModalOptions({
      additionalClasses:              'modal-small modal-dialog center-on-page',
      additionalButtonClasses:        'flat link-button normal-link small',
      animatePosition:                'bottom',
      buttonCopy:                     'MODAL_WHERE_CAN_I_LINK',
      modalId:                        'helpModal',
      modalTranslateCopy:             'MODAL_WHERE_CAN_I_TITLE',
      typeOfModal:                    'default',
    });
  }

  ngOnInit() {
    
    this.userService.$user.subscribe((user)=>{
      this.user = user;
    })
  }

}
