import { Directive, ElementRef, Input, Renderer, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Directive({
  selector: '[appRepeatPasswordDirective]'
})
export class RepeatPasswordDirectiveDirective {
  passwordValidation: boolean = false;
  @Input('appRepeatPasswordDirective') f: string;

  constructor(public el: ElementRef, public renderer: Renderer, public fg: FormGroup) {}

  repeatPasswordFunction(inputKey: string): void {
    if(inputKey == "forgotPasswordRepeat") this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
  }
  
  ngOnInit() {
    this.repeatPasswordFunction(this.f);
  }

}
