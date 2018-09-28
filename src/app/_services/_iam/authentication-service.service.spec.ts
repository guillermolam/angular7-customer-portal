import { TestBed, inject,async } from '@angular/core/testing';
import { HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthenticationService } from './authentication-service.service';
import { environment } from '../../../environments/environment.dev'
import { UserService } from '../user.service';
import { User } from '../../_models/user';
import { FakeAccountResponse } from '../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-account-response.model';
import { FakePolicyResponse } from '../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-policy-response.model';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


describe('AuthenticationService', () => {

  let authService : AuthenticationService;
  let httpMock: HttpTestingController;
  let userService: UserService;
  let user: User;
  let policyResponse: FakePolicyResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        UserService
      ],
      imports:[HttpClientTestingModule]
    });

    user = FakeAccountResponse.getUserData();
    policyResponse = FakePolicyResponse.getPolicyDetails();
    httpMock = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
    authService = TestBed.get(AuthenticationService);

    userService.updateUser(user);
    
  });

  afterEach(()=>{
    httpMock.verify();
    user = null;
    httpMock = null;
    userService = null;
    authService = null;
  })

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should confirm policy and account', async(()=>{
    authService.confirmPolicyAndAccount(userService).subscribe((resUser)=>{
      expect(resUser).toEqual(user);
    });

    const req = httpMock.expectOne(`${environment.account}/accounts/${user.email}`);
    expect(req.request.method).toBe('PUT');
    req.flush(user);
  }));

  it('should throw error for confirm policy and account', async(()=>{

    spyOn(authService,'confirmPolicyAndAccount').and.returnValue(Observable.throwError({status: 404}));
    authService.confirmPolicyAndAccount(userService).subscribe((resUser)=>{
    }, (err)=>{
      expect(err).toEqual({status: 404});
    });
  }));


  it('should confirm paperless policy', async(()=>{
    authService.confirmPaperLessPolicy(userService).subscribe((resUser)=>{
      expect(resUser).toEqual(user);
    });

    const req = httpMock.expectOne(`${environment.account}/accounts/${user.email}`);
    expect(req.request.method).toBe('PUT');
    req.flush(user);
  }));

  it('should create a password', async(()=>{
    
    authService.createPassword(userService).subscribe((resUser)=>{
      expect(resUser).toEqual(user);
    });

    const req = httpMock.expectOne(`${environment.account}/accounts/${user.email}`);
    expect(req.request.method).toBe('PUT');
    req.flush(user);
  }));

  it('should send email on forgot password', async(()=>{
    
    authService.forgotPasswordSendEmailId(user.email).subscribe((resUser)=>{
      expect(resUser.email).toBe(user.email)
      expect(resUser).toEqual(user);
    });

    const req = httpMock.expectOne(`${environment.identity}/identity/users/account-recovery?email=${user.email}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.params.get('email')).toBe(user.email);
    req.flush(user);
  }));

  it('should login successfully',async(()=>{
    let username = 'test@xyz.com';
    let password = 'password';
    const client_id =     '7d72ecb1-ce1d-4815-8fce-0198dd83c8c4',
          client_secret = 'aeb8f080-98b7-488d-bd10-8d26fedeef2d';
    let urlpartone =      `${environment.api_gateway_url}/auth/oauth/v2/token`,
        urlparttwo =      `grant_type=password&username=${username}&password=${password}&client_id=${client_id}&client_secret=${client_secret}&scope=oob`;
    let url = urlpartone + '?' + urlparttwo;

    authService.login(username,password).subscribe((response)=>{
      expect(response).toBeTruthy();
    }, (err)=>{
      expect(err).toBe('Invalid email/password combination');
    });
    
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush({token: 'asdfghjkl'});
  }));

  it('should throw error while login', async(()=>{
      spyOn(authService,'login').and.returnValue(Observable.throwError('Invalid email/password combination'));
      authService.login('username','password').subscribe((resUser)=>{
      }, (err)=>{
        expect(err).toBe('Invalid email/password combination');
      });
  }));


  it('should not login successfully',async(()=>{
    let username = 'test@xyz.com';
    let password = 'password';
    const client_id =     '7d72ecb1-ce1d-4815-8fce-0198dd83c8c4',
          client_secret = 'aeb8f080-98b7-488d-bd10-8d26fedeef2d';
    let urlpartone =      `${environment.api_gateway_url}/auth/oauth/v2/token`,
        urlparttwo =      `grant_type=password&username=${username}&password=${password}&client_id=${client_id}&client_secret=${client_secret}&scope=oob`;
    let url = urlpartone + '?' + urlparttwo;

    authService.login(username,password).subscribe((response)=>{
      expect(response).not.toBeTruthy();
    });
    
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    expect(req.request.params.get('username')).not.toBe('username');
    expect(req.request.params.get('password')).not.toBe('pass');
    req.flush(null);
  }));

  it('should logout the user', async(()=>{
    authService.token = 'token';
    localStorage.setItem('currentUser',JSON.stringify({ user: 'username', token: 'access_token' }));
    authService.logout();
    expect(localStorage.getItem('currentUser')).toBeNull();
    expect(authService.token).toBeNull();
  }));
  
  it('should verify the token for forgotpassword', async(()=>{
    
    let token = 'asdfghjkl';
    let email = 'test@xyz.com';
    let location = 'forgotPassword'
    authService.tokenVerification(token,email,location).subscribe((response: HttpResponse<Number>)=>{
        expect(response.status).toBe(200);
    });

    const req = httpMock.expectOne(`${environment.identity}/identity/users/${email}?token=${token}`);
    expect(req.request.method).toBe('POST');
    req.flush(new HttpResponse<Number>({status: 200}));
  }));


  it('should verify the token for verifyaccount', async(()=>{
    
    let token = 'asdfghjkl';
    let email = 'test@xyz.com';
    let location = 'verifyAccount'
    authService.tokenVerification(token,email,location).subscribe((response: HttpResponse<Number>)=>{
        expect(response.status).toBe(200);
    });

    const req = httpMock.expectOne(`${environment.account}/accounts?token=${token}&email=${email}`);
    expect(req.request.method).toBe('PUT');
    req.flush(new HttpResponse<Number>({status: 200}));
  }));

  it('should update the password', async(()=>{
    
    let token = 'asdfghjkl';

    authService.updatePassword(user,token).subscribe((res: HttpResponse<Number>)=>{
        expect(res.status).toBe(200);
    });
    const req = httpMock.expectOne(`${environment.identity}/identity/users/password/${user.email}?newPassword=${user.password}&token=${token}`);
    expect(req.request.method).toBe('PUT');
    req.flush(new HttpResponse<Number>({status: 200}));
  }));


  it('should not update the password', async(()=>{
    
    let token = 'asdfghjkl';

    authService.updatePassword(user,token).subscribe((res: HttpResponse<Number>)=>{
        expect(res.status).toBe(400);
    });
    const req = httpMock.expectOne(`${environment.identity}/identity/users/password/${user.email}?newPassword=${user.password}&token=${token}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.params.get('token')).not.toBe('pqrstuv');
    req.flush(new HttpResponse<Number>({status: 400}));
  }));


  it('should verify the policy',async(()=>{

    let policyNumber = user.policyDetails[0].policynumber.policynumber;

    authService.verifyPolicy(userService).subscribe((response)=>{
      expect(response).toEqual(policyResponse);
    })

    const req = httpMock.expectOne(`${environment.personalpolicy}/policy/${policyNumber}`);
    expect(req.request.method).toBe('PUT');
    req.flush(policyResponse);
  }));

  it('should verify the user', async(()=>{

    authService.verifyUser(userService).subscribe((response)=>{
      expect(response).toEqual(user);
    })

    const req = httpMock.expectOne(`${environment.account}/accounts/${user.email}`);
    expect(req.request.method).toBe('POST');
    req.flush(user);
  }));


});
