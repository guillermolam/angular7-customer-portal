export class ModalOptions {
	additionalButtonClasses:        				string;
	accessibilityReaderOnlyButton:  				boolean;
	buttonCopy:                     				string;
	modalId:                        				string;
	modalTranslateCopy:             				string;
	iconClasses:                    				string;
	accessibilityReaderOnly:        				boolean;
	modalClickEvent:                				boolean;
	showIcons:                      				boolean;

	constructor(options:{
		additionalButtonClasses?: 						string,
		accessibilityReaderOnlyButton?: 			boolean,
		buttonCopy?: 													string,
		modalId?: 														string,
		modalTranslateCopy?: 									string,
		iconClasses?: 												string,
		accessibilityReaderOnly?: 						boolean,
		modalClickEvent?: 										boolean,
		showIcons?: 													boolean,
	} = {}){
		this.additionalButtonClasses = 				options.additionalButtonClasses || '';
		this.accessibilityReaderOnlyButton = 	!!options.accessibilityReaderOnlyButton;
		this.buttonCopy = 										options.buttonCopy || '';
		this.modalId = 												options.modalId || '';
		this.modalTranslateCopy = 						options.modalTranslateCopy || '';
		this.iconClasses = 										options.iconClasses || '';
		this.accessibilityReaderOnly = 				!!options.accessibilityReaderOnly;
		this.modalClickEvent = 								!!options.modalClickEvent;
		this.showIcons = 											!!options.showIcons;
	}
    
}