import { Component, } from '@angular/core';
import { FormGroup }  from '@angular/forms';

import { ModalOptions } from '../../_models/modal-options';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],

})
export class TestingComponent {
  headerHelpModalOptions:             ModalOptions;

  constructor(){
    this.headerHelpModalOptions = new ModalOptions({
      additionalButtonClasses:        "clear no-border", 
      buttonCopy:                     "MODAL_HELP_TITLE",
      modalId:                        "helpModal",
      iconClasses:                    "far fa-question-circle large-icons",
      modalTranslateCopy:             "MODAL_HELP_TITLE",
      screenReader:                   true,
      showIcons:                      true,
    });
  }
  
  ngOnInit(): void {
    console.log(this.headerHelpModalOptions)
  }
 }
