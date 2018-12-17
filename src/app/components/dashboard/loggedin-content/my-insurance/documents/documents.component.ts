import { TestingDataService } from '../../../../../_helpers/testing-data.service';
import { map } from 'rxjs/operators';
import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';
import { Component, OnInit,
  ViewChild, HostListener,
  AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params,
  Router }                          from '@angular/router';

import { AuthenticationService }    from '../../../../../_services/_iam/authentication-service.service';
import { User }                     from '../../../../../_models/user';
import { UserService }              from '../../../../../_services/user.service';
import { UserInfoService }          from '../../../../../_services/_userinformation/user-info.service';
import { WalletCardService }        from '../../../../../_services/_iam/wallet-card.service';
import { PolicyDetailsService }    from './../../../../../_services/my-insurance/policy-details.service';
import { BillingDataService } from './../../../../../_services/my-insurance/data-services/billing-data.service';
import { saveAs }             from 'file-saver';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentDetailsComponent implements OnInit, AfterViewInit  {
  //@ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  firstItemIndex;
  lastItemIndex;
  documents:                any = [];
  filterType:               string = 'all-docs';
  filterName:               string = 'All Documents';
  loading:                  boolean = false;
  policyId:                 number;
  previous:                 any = [];
  showNoDocuments:          boolean = false;
  // showDocuments:            boolean = false;
  user:                     User;

  policyDetails: any;

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
    private walletCardService: WalletCardService,
    private userInformation: UserInfoService,
    private policyDetailsService:  PolicyDetailsService,
    private testingData:    TestingDataService,
    private billingDataService: BillingDataService
    ) {}

  asALink(url): void {
    this.router.navigate(url);
  }

  downloadWalletCard(email, policyid) {
    this.walletCardService
      .generatePkPass(email)
      .subscribe(
        (success) => {
          console.log("Successful download of wallet card");
        },
        (err) => {
          console.log("Err download of wallet card", err);
        }
      )
    ;
  }

  getUserData(parm): void {
    this.loading = true;
    // this.userService.$user.subscribe(
    //   (user) => {
    //     if ( user != undefined ) {
    //       this.user = user ;
    //     }
    //     else {
    //       if (localStorage.getItem('access_token')) {
    //         this.userInformation
    //         .policyByEmail(this.user)
    //         .subscribe(
    //           (info: any) => {
    //             console.log(info);
    //             this.user = {
    //               firstName: info[0].insurer['firstName'],
    //               middleName: info[0].insurer['middleName'],
    //               lastName: info[0].insurer['lastName'],
    //               policyDetails: info
    //             };
    //             this.userService.updateUser(this.user);
    //           },
    //           (err) => {
    //             console.log('login success but verifyuser err', err);
    //           }
    //         );
    //       }
    //       else {
    //         this.user = this.testingData.testDatafunction();
    //         this.userService.updateUser(this.user);
    //       }
    //     }
    //   }
    // );
    
    /*
      this.userInformation
      .getUserDocuments(parm, this.user, localStorage.getItem('access-token'))
      .subscribe(
        (success) => {
          this.documents = success;
          this.loading = false;
          this.showDocuments = true;
        },
        (err) => {
          this.loading = false;
          this.showNoDocuments = true;
        }
      )
    ;*/

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


  showDocuments(policyResponse): boolean{
    return policyResponse.documentsDetails.length !== 0;
  }


  ngAfterViewInit() {
   /*  
    * Please leave this in, this is for pagenation and maybe used later
    * 
    * this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    * this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    * this.lastItemIndex = this.mdbTablePagination.lastItemIndex;
    * this.mdbTablePagination.calculateFirstItemIndex();
    * this.mdbTablePagination.calculateLastItemIndex();
    * this.cdRef.detectChanges();
    */
  }

  ngOnInit() {

    // When logging in go a verify user
    // We will need this once the new endpoints are set.
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
      this.billingDataService.$billingDetails
      .subscribe((policy) => {
        this.policyDetails = policy;
        // console.log(this.policyDetails);
      })
    });


    this.userService.$user.subscribe(
        (user) => {
          // if ( user != undefined ) {
            this.user = user ;
            console.log(this.user);
          // }
        });
    // this.billingDataService.


    // this.getUserData(this.policyId);

    // if ( this.testingData.testDataDocuments(this.policyId) ) {
    //   this.documents = this.testingData.testDataDocuments(this.policyId);
    //   this.loading = false;
    //   this.showDocuments = true;
    // // --- please do not remove this is for pagenation that maybe used later
    // // this.tableService.setDataSource(this.documents);
    // // this.documents = this.tableService.getDataSource();
    // // this.previous = this.tableService.getDataSource();
    // }
    // else {
    //   this.loading = false;
    //   this.showNoDocuments = true;
    // }

  }

  // constructor(
  //   private walletCardService: WalletCardService,
  //   private route: ActivatedRoute
  // ) { }

  onDownloadDocument(documentId: string, policyNumber, documentType) {
      this.policyDetailsService
      .getDocumentById(documentId)
      .subscribe((byteArray) => {
        const blob = new Blob([byteArray], {type: "application/pdf"});
        saveAs(blob, `document-${policyNumber}-${documentType}.pdf`);
      });
  }
}
