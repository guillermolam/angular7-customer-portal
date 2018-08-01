export class ModalOptions {
	additionalButtonClasses:        				string;
	animatePosition:												string;
	buttonCopy:                     				string;
	howManyIconsUsed:												number;
	iconClasses:                    				string;
	iconFamily:															string;
	headerIconClass:												string;
	modalId:                        				string;
	modalTranslateCopy:             				string;
	typeOfModal:														string;
	accessibilityReaderOnly:        				boolean;
	modalClickEvent:                				boolean;
	screenReader:  													boolean;
	showIcons:                      				boolean;

	constructor(options:{	
		accessibilityReaderOnly?: 						boolean,
		additionalButtonClasses?: 						string,
		animatePosition?:											string,
		buttonCopy?: 													string,
		headerIconClass?:											string,
		iconClasses?: 												string,
		iconFamily?:													string,
		modalId?: 														string,
		modalTranslateCopy?: 									string,
		modalClickEvent?: 										boolean,
		screenReader?: 												boolean,	
		showIcons?: 													boolean,
		typeOfModal?:													string,
		howManyIconsUsed?:										number

	} = {}){
		this.additionalButtonClasses = 				options.additionalButtonClasses || '';
		this.animatePosition = 								options.animatePosition || 'top';
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
		this.howManyIconsUsed =								options.howManyIconsUsed || 0 ;
		this.headerIconClass = 								options.headerIconClass || '';
	}
}