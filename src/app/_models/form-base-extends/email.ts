import { FormBase } from "../form-base";

export class Email extends FormBase<string> {
    controlType = 'password';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
      }
}
