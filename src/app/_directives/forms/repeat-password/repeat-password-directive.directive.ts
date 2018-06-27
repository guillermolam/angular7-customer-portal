import { Directive, ElementRef, Input, Renderer, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRepeatPasswordDirective]'
})
export class RepeatPasswordDirectiveDirective {
  passwordValidation: boolean = false;
  @Input('appRepeatPasswordDirective') f: string;
  @Input('validationRepeatPasswordDirective') s: boolean;

  constructor(public el: ElementRef, public renderer: Renderer) {}

  repeatPasswordFunction(inputKey: string): void {
    if(inputKey == "forgotPasswordRepeat") this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
  }

  validationCheck(val): void {
    console.log(val, "check");
   // if(val) this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
  }

  ngOnInit() {
    this.repeatPasswordFunction(this.f);
  }

}
