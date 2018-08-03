/** Importing angular default component **/
import { async, ComponentFixture, TestBed }            from '@angular/core/testing';
import { NO_ERRORS_SCHEMA}                             from '@angular/core';
import { RouterTestingModule }                         from '@angular/router/testing';
import { TranslateModule }                             from '@ngx-translate/core';

/** Import component & services **/
import { HeaderComponent }              from './header.component';
import { Component }                    from '@angular/core';
import { Language }                     from '../../../app.language';

/* Declaration of header component. */
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        Component, Language
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  /* Before each test cases it will check the changes in fixture. */
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verify all component available. */
  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  /* language change unit test cases */
  fit('Language change test case', () => {
    fixture.whenStable().then(() => {
      // Verify first time default language should be english.
       expect(component['defaultLang']).toEqual("English");
       // Calling language change component and set language to Spanish with ES passing.
       component.changeLang("ES");
       // Verify language after change it to spanish.
       expect(component['defaultLang']).toEqual("Spanish");
       // Calling language change component and set language to apart from english and spanish.
       component.changeLang("FR");
       // Verify it should return the Choose Language.
       expect(component['defaultLang']).toEqual("Choose Language");
    });
  });

});
