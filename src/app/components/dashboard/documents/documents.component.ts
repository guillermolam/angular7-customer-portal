import { TestingDataService } from './../../../_helpers/testing-data.service';

import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';

import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl }   from '@angular/forms';
import { ActivatedRoute, Params,
          Router }                  from '@angular/router';

import { AuthenticationService }    from '../../../_services/_iam/authentication-service.service';
import { User }                     from '../../../_models/user';
import { UserService }              from './../../../_services/user.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit, AfterViewInit  {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  firstItemIndex;
  lastItemIndex;
  filterType:               string = 'all-docs';
  filterName:               string = 'All Documents';
  policyId:                 number;
  previous:                 any = [];
  user:                     User;

  /**
   * 
   *  Information ----
   *  Many of these elements in here will become it's own component
   *  However I don't have the time at the moment
   *  to create a stand a lone version.
   * 
   */

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService:    AuthenticationService,
    private userService:    UserService,
    private tableService:   MdbTableService,
    private router:         Router,
    private cdRef:          ChangeDetectorRef,
    private testingData:    TestingDataService
    ) {}

  asALink(url): void {
    this.router.navigate(url);
  }

  onSelectFilter(filterName): void {
    switch (filterName) {
      case 'all-doc':
        this.filterType =     'all-docs';
        this.filterName =     'All Documents';
        break;

      case 'end':
        this.filterType =     'endorsments';
        this.filterName =     'Endorsments';
        break;

      case 'misc':
        this.filterType =     'misc';
        this.filterName =     'Misc';
        break;

      case 'renew':
        this.filterType =     'renewal';
        this.filterName =     'Renewal';
        break;
    }
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  ngOnInit() {

    // When logging in go a verify user
    // We will need this once the new endpoints are set.
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
    });

    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          if (localStorage.getItem('access_token')) {
            this.authService
            .verifyUser(this.user)
            .subscribe(
              (info: any) => {
                console.log(info);
                this.user = {
                  firstName: info[0].insurer['firstName'],
                  middleName: info[0].insurer['middleName'],
                  lastName: info[0].insurer['lastName'],
                  policyDetails: info
                };
                this.userService.updateUser(this.user);
              },
              (err) => {
                console.log('login success but verifyuser err', err);
              }
            );
          }
          else {
            this.user = this.testingData.testDatafunction();
            this.userService.updateUser(this.user);
          }
        }
      }
    );

    this.tableService.setDataSource(this.user.documents);
    this.user.documents = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }

}
