import { Observable, Observer } from "rxjs";

export class FakeAccountSettings{

    public static user: any = {
        firstName: 'tesing',
        middleName: 'testing',
        lastName: 'testing',
        email: 'john@test.com',
        password: 'test@2018',
        phone: '',
        checkingAccount: {
            bankName: "PNC Financial Services Group, Inc.",
            accountHolderName: "John",
            routingNumber: 123456789,
            accountNumber: 1111222233334444,
            mailingAddress: "17 Lothian Road, Brighton, MA",
            apartment: ""
        }
    }

    static getUserData(){
        return Observable.create((observer: Observer<any>)=>{
            observer.next(this.user);
        })
    }

}