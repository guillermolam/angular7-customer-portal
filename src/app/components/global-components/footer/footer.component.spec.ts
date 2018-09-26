/** Importing angular default component **/
import { BrowserModule }                               from "@angular/platform-browser";
import { BrowserAnimationsModule }                      from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed }            from '@angular/core/testing';
import { NO_ERRORS_SCHEMA}                             from '@angular/core';
import { RouterTestingModule }                         from '@angular/router/testing';
import { TranslateModule }                             from '@ngx-translate/core';

import { FooterComponent } from './footer.component';
import { Component }                    from '@angular/core';
import { Language }                     from '../../../app.language';
import { MDBBootstrapModule }           from "angular-bootstrap-md";
import { ModalOptions }                 from '../../../_models/modal-options';
import { MapfreModalComponent }         from '../../section-components/mapfre-modal/mapfre-modal.component';
import { MapfreButtonComponent }        from '../../../components/individual-components/inputs/mapfre-button/mapfre-button.component';
import { MapfreIconComponent }          from '../../../components/individual-components/mapfre-icon/mapfre-icon.component';

/** Declaration of footer component **/
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let copyRightYear : number = 2018;
  let languageArray : any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent, MapfreModalComponent, MapfreButtonComponent, MapfreIconComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        RouterTestingModule,
        MDBBootstrapModule.forRoot()
      ],
      providers: [
        Component, Language
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.footerHelpModalOptions = new ModalOptions({
      additionalButtonClasses:        "footer-flat", 
      animatePosition:                "bottom",
      buttonCopy:                     "FOOTER_DEFAULT_LANGUAGE",
      headerIconClass:                "language",
      howManyIconsUsed:               2,
      iconClasses:                    "language, unfold_more",
      iconFamily:                      "material-icons",
      modalId:                        "langModal",
      modalTranslateCopy:             "MODAL_USER_LANGUAGE_TITLE",
      screenReader:                   false,
      showIcons:                      true,
      typeOfModal:                    "footer",
    });
     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* unit test cases Footer copyright year and copy rights title */
  it('Landing page Year on footer-copyright unit test', (done:Function) => {
    fixture.whenStable().then(() => {
        // Verified copy write year on footer.
        expect(component.year).toEqual(copyRightYear);
        // Verified Default language should be selected as English By EN Identifier.
        expect(component.defaultLanguage).toEqual("EN");
        //Getting English array index and storing it's location on langIndex variable
        languageArray = component._languages.lang;
        let langIndex: number;
        for(let i=0; i < languageArray.length; i++){
          if (languageArray[i].identifier.includes("EN")){
            langIndex=i;
          }
        }
        // Verified footer copy rights message.
        expect(languageArray[langIndex].sentences['FOOTER_COPY_RIGHT']).toEqual("MAPFRE U.S.A Corp. All rights reserved.")
        done();
    });
  });
});
