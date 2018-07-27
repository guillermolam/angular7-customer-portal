export class ModalOptions {
	additionalButtonClasses:        				string;
	buttonCopy:                     				string;
	iconClasses:                    				string;
	iconFamily:															string;
	modalId:                        				string;
	modalTranslateCopy:             				string;
	typeOfModal:														string;
	accessibilityReaderOnly:        				boolean;
	modalClickEvent:                				boolean;
	screenReader:  													boolean;
	showIcons:                      				boolean;

	constructor(options:{
		additionalButtonClasses?: 						string,
		screenReader?: 												boolean,
		buttonCopy?: 													string,
		modalId?: 														string,
		modalTranslateCopy?: 									string,
		iconClasses?: 												string,
		iconFamily?:													string,
		typeOfModal?:													string;
		accessibilityReaderOnly?: 						boolean,
		modalClickEvent?: 										boolean,
		showIcons?: 													boolean,
	} = {}){
		this.additionalButtonClasses = 				options.additionalButtonClasses || '';
		this.screenReader = 									!!options.screenReader;
		this.buttonCopy = 										options.buttonCopy || '';
		this.modalId = 												options.modalId || '';
		this.modalTranslateCopy = 						options.modalTranslateCopy || '';
		this.iconClasses = 										options.iconClasses || '';
		this.iconFamily = 										options.iconFamily || '';
		this.typeOfModal =										options.typeOfModal || 'default';
		this.accessibilityReaderOnly = 				!!options.accessibilityReaderOnly;
		this.modalClickEvent = 								!!options.modalClickEvent;
		this.showIcons = 											!!options.showIcons;
	}
}