/* 
		This is a repository for Regular Expressions. There has been a few instances where 
		they have been reused. So, instead of search where you might have used one 
		and copy it, you now just have a class with all of them.

		import { RegExHelper } from "{add other dirs here}/_helpers/regex-helper";
		constructor( private regExHelper: RegExHelper) {}
*/
export class RegExHelper {
	public looseEmailPattern:     RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/g;
	public strictEmailPattern:    RegExp = /^^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	public noSpacePattern:   			RegExp = /^\s*$/; 
	public passwordRulesPattern: 	{} = {
		'ruleOne':    /^(?=.*[a-z])(?=.*[A-Z])/g,
		'ruleTwo':    /^(?=.*[0-9])/g,
		'ruleThree':  /^(?=.*[!@#\$%\^&\*])/g,
		'ruleFour':   /^(?=.{7,})/g,
		'ruleFive':   /^.{1,24}$/g,
		'all':        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(.{7,24}$)/g
	};
}

