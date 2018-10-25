export class VerifyUserResponse {
    static response = [
    {
        policynumber: {
            policynumber: 'BB0490'
        },
        insurer: [
            {
                'firstName': 'MICHAEL',
                'middleName': 'P',
                'lastName': 'MCKEON',
                'Insurer Name': 'MICHAEL P MCKEON'
            }
        ],
        policyStatus: 'CANCELLED',
        policyFlags: {
            isEft: false,
            isEftEligi: false,
            isEdf: false,
            isEdfElig: false,
            isEbill: false,
            isEbillElig: false
        },
        property: null,
        vehicle: [
            {
                vehicle: '2005 KARAV UTILI'
            },
            {
                vehicle: '2004 FORD F350 SUP'
            }
        ],
        policyType: 'AUTO',
        effDate: '2015-12-04T00:00:00.000+0000',
        expDate: '2016-12-04T00:00:00.000+0000'
    }
];
}
