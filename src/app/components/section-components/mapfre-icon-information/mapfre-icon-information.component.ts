import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mapfre-icon-information',
  templateUrl: './mapfre-icon-information.component.html',
  styleUrls: ['./mapfre-icon-information.component.scss']
})
export class MapfreIconInformationComponent implements OnInit {
	@Input() data:                     				string = '';
	@Input() iconClasses:                     string = '';
  @Input() iconFamily:                    	string = 'material-icons';
  @Input() titleType:                     	string = '';

	constructor() { }

  ngOnInit() {
  }

}
