/* 
		This is a repository for Regular Expressions. There has been a few instances where 
		they have been reused. So, instead of search where you might have used one 
		and copy it, you now just have a class with all of them.

		import { RegExHelper } from "{add other dirs here}/_helpers/regex-helper";
		constructor( private regExHelper: RegExHelper) {}
*/
export class RegExHelper {
  public customPattern:         RegExp;
  public looseEmailPattern:     RegExp;
  public namePattern:           RegExp;
  public noSpacePattern:        RegExp;
  public passwordRulesPattern:  {};
  public policyPattern:         RegExp;
	public strictEmailPattern:    RegExp;
	
  constructor(){
    this.customPattern =        / /;
    this.looseEmailPattern =    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/g;
    this.strictEmailPattern =   /^([A-Za-z0-9]+[\_\.]{0,1}?[A-Za-z0-9]+){1,63}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]{3,63}\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    this.noSpacePattern =       /^\s*$/;
    this.namePattern =          /^((?!\_)[A-z]+((-)*[A-z])*)$/;
    this.policyPattern =        /^[A-z0-9]+$/;
    this.passwordRulesPattern = {
      'ruleOne':    /^(?=.*[a-z])(?=.*[A-Z])/g,
      'ruleTwo':    /^(?=.*[0-9])/g,
      'ruleThree':  /^(?=.*[!@#\$%\^&\*])/g,
      'ruleFour':   /^(?=.{7,})/g,
      'all':        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/g,
      'patternForDynamicForm': /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/g
    };
  }

  public regExPasswordStrength(rule: string, value: string): any {
    if( 
      (value != undefined || value != null || value != '' || value !== undefined || value !== null) 
      && this.passwordRulesPattern[rule].test(value) 
    ) return true;
  }

}

