import { FormBase } from "../form-base";

export class Password extends FormBase<string> {
    controlType = 'password';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
      }
}