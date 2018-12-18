import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import { User }                   from './../../../../../_models/user';
import { UserService }            from './../../../../../_services/user.service';

@Component({
  selector: 'app-paperless',
  templateUrl: './paperless.component.html',
  styleUrls: ['./paperless.component.scss']
})
export class PaperlessComponent implements OnInit {
  firstTime:                      boolean;
  paperlessPage:                  string = '';
  user:                           User;

  constructor(
    private activatedRoute:       ActivatedRoute,
    private route:                Router,
  ) { }

  checkPaperlessPage(): void {
    let page = '';
    const url = '/billing/paperless/',
          enrollCopy = '- Enroll in ';

    if ( this.route.isActive(`${url}e-policy`, true) ) {
      page = `${enrollCopy}e-policy`;
    }
    else if (this.route.isActive(`${url}e-pay`, true)) {
      page = `${enrollCopy}e-pay`;
    }
    else if (this.route.isActive(`${url}e-bill`, true)) {
      page = `${enrollCopy}e-bill`;
    }
    else {
      page = '';
    }

    this.paperlessPage = page;
  }

  
  ngOnInit() {
  
  }

}
