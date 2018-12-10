export interface Billing {
  billingInfo:        Array<BillingInfo>;
  policyId:           string;
  amount:             number;
}

export interface BillingInfo {
  accountName:        string;
  accountNumber:      number;
  bankRoutingNumber:  number;
  mailingAddress:     string;
  apartment?:         string;
  checkNumber?:       number;
}

