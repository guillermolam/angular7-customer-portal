import { Component, OnInit, Input } from '@angular/core';
import { PaperlessService }         from './../../../_services/_iam/paperless.service';
import { UserService }              from './../../../_services/user.service';

@Component({
  selector: 'app-misc-column',
  templateUrl: './misc-column.component.html',
  styleUrls: ['./misc-column.component.scss']
})
export class MiscColumnComponent implements OnInit {
  userData;

  constructor(
    private paperlessService: PaperlessService,
    private userService: UserService
  ) { }

  firstTime(): boolean {
    return this.paperlessService.checkIfEnrolledInEPay(this.userData);
  }

  ngOnInit() {
   this.userService.$user.subscribe(
     (user) => {
       this.userData = user;
      }
    );
  }

}
