import { DocumentsDataService } from './../../../../../_services/data-services/documents-data.service';
import { StorageServiceObservablesService } from './../../../../../_services/storage-service-observables/storage-service-observables.service';
import { MdbTablePaginationComponent, 
        MdbTableService }           from 'angular-bootstrap-md';
import { Component, OnInit,
          ViewChild, HostListener, AfterViewInit,
          ChangeDetectorRef }       from '@angular/core';
import { ActivatedRoute, Params,
  Router }                          from '@angular/router';

import { AuthenticationService }    from '../../../../../_services/_iam/authentication-service.service';
import { PolicyDataService }        from './../../../../../_services/data-services/policy-data.service';
import { PolicyDetailsService }     from './../../../../../_services/my-insurance/policy-details.service';
import { saveAs }                   from 'file-saver';
import { User }                     from '../../../../../_models/user';
import { UserService }              from '../../../../../_services/user.service';
import { WalletCardService }        from '../../../../../_services/_iam/wallet-card.service';
import { forkJoin } from 'rxjs';
import { TestingDataService } from './../../../../../_helpers/testing-data.service';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentDetailsComponent implements OnInit, AfterViewInit  {
  /*
    * Next few lines are for pagenation please do not remove them at this time
    * @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  */

  firstItemIndex;
  lastItemIndex;

  documents:                        any = [];
  filterType:                       string = 'all-docs';
  filterName:                       string = 'All Documents';
  loading:                          boolean = false;
  policyId:                         string;
  policyDetails:                    any = [];
  previous:                         any = [];
  showNoDocuments:                  boolean = false;
  user:                             any;
  documentsData:                    any = [];

  /**
   *
   *  Information ----
   *  Many of these elements in here will become it's own component
   *  However I don't have the time at the moment to create a stand a lone version.
   *
   */

  constructor(
    private activatedRoute:         ActivatedRoute,
    private router:                 Router,
    private tableService:           MdbTableService,
    private policyDataService:      PolicyDataService,
    private policyDetailsService:   PolicyDetailsService,
    private userService:            UserService,
    private walletCardService:      WalletCardService,
    private storageServiceObservablesService: StorageServiceObservablesService,
    private documentsDataService:   DocumentsDataService,
    private testingData:            TestingDataService
    ) {}

  asALink(url): void {
    this.router.navigate(url);
  }

  downloadWalletCard(email, policyid) {
    this.walletCardService
      .generatePkPass(email)
      .subscribe(
        (success) => {
      
        },
        (err) => {
      
        }
      )
    ;
  }

  onDownloadDocument(documentId: string, policyId, documentType) {
    this.policyDetailsService
    .getDocumentById(documentId)
    .subscribe((byteArray: BlobPart) => {
      const blob =            new Blob([byteArray], {type: 'application/pdf'});
      const fileURL =         URL.createObjectURL(blob);
      window.open(fileURL, '_blank');
      // saveAs(blob, `document-${policyId}-${documentType}.pdf`,);
    });
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

  /*
   * Next few methods are for the pagenation for the data tables
   * At this moment of time we are not using them but please do not remove them
  */
  onNextPageClick(data) {
    this.firstItemIndex =     data.first;
    this.lastItemIndex =      data.last;
  }

  onPreviousPageClick(data) {
    this.firstItemIndex =     data.first;
    this.lastItemIndex =      data.last;
  }

  showDocuments(documentsDetails): boolean{
    return documentsDetails.length !== 0;
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
    this.loading = true;

    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
      
      this.policyDetailsService.getDocumentsByPolicy(this.policyId)
      .subscribe((documentResponse) => {
        this.documentsData  = documentResponse;
        this.loading = false;
      },
      (err)=>{});

      this.userService.$user.subscribe( (user) => {
        this.user = user;
      });

      this.policyDataService.$policyDetails.subscribe((policyResponse)=>{
        this.policyDetails  = policyResponse;
      });

      //this.loading = false;
      //this.documentsData = this.testingData.testDocumentsObject();
    });
  }
}
