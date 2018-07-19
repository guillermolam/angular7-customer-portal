import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'mapfre-input',
  templateUrl: './mapfre-input.component.html',
  styleUrls: ['./mapfre-input.component.scss'],
})
export class MapfreInputComponent implements OnInit {
  @Input() icon:                                boolean;
  @Input() isThisRequired:                      boolean;
  @Input() validation:                          boolean;
  @Input() additionalClasses:                   string;
  @Input() iconClasses:                         string;
  @Input() inputType:                           string;
  @Input() inputName:                           string;
  @Input() inputGroupControl:                   Object;
  @Input() inputGroupControlType:               Object;
  @Input() group:                               FormGroup;
  
  @Output() inputValue: EventEmitter<string> = new EventEmitter();

  onInputOfValue(value: string){
    this.inputValue.emit(value);    
  }

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() { }

}
