export class FakePolicyResponse{
    private static policyDetails =  {
        "policynumber": {
            "policynumber": "BB0490"
        },
        "insurer": [
            {
                "firstName": "MICHAEL",
                "middleName": "P",
                "lastName": "MCKEON",
                "Insurer Name": "MICHAEL P MCKEON"
            }
        ],
        "policyStatus": "CANCELLED",
        "policyFlags": {
            "isEft": false,
            "isEftEligi": false,
            "isEbillElig": false,
            "isEdfElig": false,
            "isEdf": false,
            "isEbill": false
        },
        "policyType": "AUTO",
        "vehicle": [
            {
                "vehicle": "2004 FORD F350 SUP"
            },
            {
                "vehicle": "2005 KARAV UTILI"
            }
        ],
        "effDate": "2015-12-04T00:00:00.000+0000",
        "expDate": "2016-12-04T00:00:00.000+0000"
    }

    static getPolicyDetails(){
        return this.policyDetails;
    }

}