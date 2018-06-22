export class FormBase<T> {
    value: T;
    additionalClasses:  string;
    key:                string;
    icon:               boolean;
    iconClasses:        string;
    label:              string;
    required:           boolean;
    order:              number;
    controlType:        string;

    constructor(options: {
        value?: T,
        additionalClasses?: string,
        key?:               string,
        icon?:              boolean,
        iconClasses?:       string,
        label?:             string,
        required?:          boolean,
        order?:             number,
        controlType?:       string
    } = {}) {
        this.value = options.value;
        this.additionalClasses = options.additionalClasses;
        this.key = options.key || '';
        this.icon = !!options.icon;
        this.iconClasses = options.iconClasses || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
}