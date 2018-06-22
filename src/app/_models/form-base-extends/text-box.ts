import { FormBase } from "../form-base";

export class TextBox extends FormBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
      }
}
