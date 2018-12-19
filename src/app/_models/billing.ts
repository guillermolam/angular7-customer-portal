export interface Billing {
  billingInfo:          Array<BillingInfo>;
  policyId?:            string;
  amount?:              number;
  deductionDate?:       number;
}

export interface BillingInfo {
  accountName:        string;
  accountNumber:      number;
  bankRoutingNumber:  number;
  mailingAddress?:     string;
  accountType?:       string;
  apartment?:         string;
  checkNumber?:       number;
}

