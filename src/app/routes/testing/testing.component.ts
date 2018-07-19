import { Component, } from '@angular/core';
import { FormGroup }  from '@angular/forms';

import { FormBase } from '../../_models/form-base';
import { ModalOptions } from '../../_models/modal-options';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],

})
export class TestingComponent {
  testingObject:                      object;
  testingObjectTwo:                   object;

  constructor(){
    this.testingObject =    {
      buttonCopy:                     "MODAL_HELP_TITLE",
      modalId:                        "TestingId2",
      modalTranslateCopy:             "MODAL_HELP_TITLE",
      screenReader:                   false,
      showIcons:                      false,
    };
    this.testingObjectTwo = {
      screenReader:                   true,
      additionalButtonClasses:        "btn-warning",
      buttonCopy:                     "MODAL_HELP_TITLE",
      iconClasses:                    "fas fa-exclamation-triangle small-icons",
      modalId:                        "TestingId",
      modalTranslateCopy:             "MODAL_HELP_TITLE",
      showIcons:                      true,
    };
  }
  
  ngOnInit(): void {
    console.log(this.testingObject)
  }
 }
