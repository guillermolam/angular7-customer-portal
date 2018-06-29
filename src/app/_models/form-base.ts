export class FormBase<T> {
    value:              T;
    additionalClasses:  string;
    controlType:        string;
    customRegExVal:     RegExp;
    key:                string;
    icon:               boolean;
    iconClasses:        string;
    label:              string;
    minLength:          number;
    maxLength:          number;
    required:           boolean;
    order:              number;
    
    constructor(options: 
    {
        value?:             T,
        additionalClasses?: string,
        controlType?:       string,
        customRegExVal?:    RegExp,
        key?:               string,
        icon?:              boolean,
        iconClasses?:       string,
        label?:             string,
        minLength?:         number,
        maxLength?:         number,
        required?:          boolean,
        order?:             number
    } = {}) 
    {
        this.value =                options.value;
        this.additionalClasses =    options.additionalClasses;
        this.controlType =          options.controlType || '';
        this.key =                  options.key || '';
        this.icon =                 !!options.icon;
        this.iconClasses =          options.iconClasses || '';
        this.label =                options.label || '';
        this.minLength =            options.minLength === undefined ? 0 : options.minLength;
        this.maxLength =            options.maxLength === undefined ? 128 : options.maxLength;
        this.required =             !!options.required;
        this.order =                options.order === undefined ? 1 : options.order;
    }
}