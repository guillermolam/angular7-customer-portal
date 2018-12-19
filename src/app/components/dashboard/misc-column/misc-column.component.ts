import { PaperlessService } from './../../../_services/_iam/paperless.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-misc-column',
  templateUrl: './misc-column.component.html',
  styleUrls: ['./misc-column.component.scss']
})
export class MiscColumnComponent implements OnInit {

  constructor(
    private paperlessService: PaperlessService
  ) { }

  firstTime(): boolean {
    return this.paperlessService.allEPayMethod();
  }

  ngOnInit() {
  }

}
