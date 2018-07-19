import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mapfre-icon',
  templateUrl: './mapfre-icon.component.html',
  styleUrls: ['./mapfre-icon.component.scss']
})
export class MapfreIconComponent implements OnInit {
  @Input() iconClasses:                       string;
  @Input() title:                             boolean = false;
  @Input() password:                          boolean;
  @Input() passwordShow:                      boolean = false;
  @Input() onFocusShowIcon:                   boolean = false;
  @Input() showIconsForPassword:              boolean;
           screenReaderText:                  string = 'SHOW_PASSWORD';
  
  @Output() onClickShowPassword = new EventEmitter<boolean>();

  showPasswordFunction(event): void {
    this.passwordShow = !this.passwordShow;
    this.onClickShowPassword.emit(this.passwordShow);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
