import { TestBed, inject, async, tick } from '@angular/core/testing';
import { HttpTestingController,
  HttpClientTestingModule}        from '@angular/common/http/testing';
import { HttpResponse}            from '@angular/common/http';
import { AuthenticationService }  from './authentication-service.service';
import { environment }            from '../../../environments/environment';
import { UserService }            from '../user.service';
import { User }                   from '../../_models/user';
import { FakeAccountResponse }    from '../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-account-response.model';
import { FakePolicyResponse }     from '../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-policy-response.model';
import { CreateAccountRequest } from '../../_helpers/_testing-helpers/_services/_testing-helpers/fakeRequestBody/create-account-request.model';

describe('AuthenticationService', () => {

  let authService: AuthenticationService;
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
      imports: [HttpClientTestingModule]
    });

    user = FakeAccountResponse.getUserData();
    policyResponse = FakePolicyResponse.getPolicyDetails();
    httpMock = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
    authService = TestBed.get(AuthenticationService);

    userService.updateUser(user);
  });

  afterEach( () => {
    httpMock.verify();
    user = null;
    httpMock = null;
    userService = null;
    authService = null;
  });

  xit('should confirm policy and account', async( () => {

    authService.confirmPolicyAndAccount(userService).subscribe( (resUser) => {
      expect(resUser).toEqual(new HttpResponse({status: 201}));
    });

    const req = httpMock.expectOne(`${environment.backend_server_url}/customers/accounts/${user.email}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(CreateAccountRequest.requestBody);
    req.flush(new HttpResponse({status: 201}));
  }));

  xit('should throw error for confirm policy and account', async( () => {

    authService.confirmPolicyAndAccount(userService).subscribe( (resUser) => {
    }, (err) => {
      expect(err).toBe('error');
    });

    const req = httpMock.expectOne(`${environment.backend_server_url}/customers/accounts/${user.email}`);
    req.error(new ErrorEvent('error'));
  }));

  xit('should create a password', async(() => {
    authService.createPassword(userService).subscribe((resUser)=>{
      expect(resUser).toEqual(new HttpResponse({status: 201}));
    });

    const req = httpMock.expectOne(`${environment.backend_server_url}/customers/accounts/${user.email}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(CreateAccountRequest.requestBody);
    req.flush(new HttpResponse({status: 201}));
  }));

  xit('should send email on forgot password', async( () => {
    const email = 'abc@test.com';
    authService.forgotPasswordSendEmailId(email).subscribe( (resUser) => {
      expect(resUser).toEqual(new HttpResponse({status: 200}));
    });

    const req = httpMock.expectOne(`${environment.backend_server_url}/identity/users/account-recovery?email=${email}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.params.get('email')).toBe(email);
    req.flush(new HttpResponse({status: 200}));
  }));

  xit('should login successfully', async( () => {
    let username = 'test@xyz.com';
    let password = 'password';
    const client_id =     '7d72ecb1-ce1d-4815-8fce-0198dd83c8c4',
          client_secret = 'aeb8f080-98b7-488d-bd10-8d26fedeef2d';
    let urlpartone =      `${environment.backend_server_url}/auth/oauth/v2/token`,
        urlparttwo =      `grant_type=password&username=${username}&password=${password}`;
    let url = urlpartone + '?' + urlparttwo;

    authService.login(username, password).subscribe((response) => {
      expect(response).toBeTruthy();
    }, (err) => {
      expect(err).toBe('Invalid email/password combination');
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush({token: 'asdfghjkl'});
  }));

  xit('should throw error while login', async(() => {
    let username =        'test@xyz.com';
    let password =        'password';
    const client_id =     '7d72ecb1-ce1d-4815-8fce-0198dd83c8c4',
          client_secret = 'aeb8f080-98b7-488d-bd10-8d26fedeef2d';
    let urlpartone =      `${environment.backend_server_url}/auth/oauth/v2/token`,
        urlparttwo =      `grant_type=password&username=${username}&password=${password}`;
    let url = urlpartone + '?' + urlparttwo;

    authService.login(username,password).subscribe((response) => {
    }, (err) => {
      expect(err).toBe('Invalid email/password combination');
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.error(new ErrorEvent('Invalid email/password combination'));
  }));

  xit('should not login successfully', async( () => {
    let username =        'test@xyz.com';
    let password =        'password';
    const client_id =     '7d72ecb1-ce1d-4815-8fce-0198dd83c8c4',
          client_secret = 'aeb8f080-98b7-488d-bd10-8d26fedeef2d';
    let urlpartone =      `${environment.backend_server_url}/auth/oauth/v2/token`,
        urlparttwo =      `grant_type=password&username=${username}&password=${password}`;
    let url = urlpartone + '?' + urlparttwo;

    authService.login(username,password).subscribe( (response) => {
      expect(response).not.toBeTruthy();
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    expect(req.request.params.get('username')).not.toBe('username');
    expect(req.request.params.get('password')).not.toBe('pass');
    req.flush(null);
  }));

  xit('should logout the user', async( () => {
    authService.token = 'token';
    localStorage.setItem('currentUser', JSON.stringify({ user: 'username', token: 'current_user' }));
    authService.logout();
    expect(localStorage.getItem('currentUser')).toBeNull();
    expect(authService.token).toBeNull();
  }));

  xit('should verify the token for verifyaccount', async( () => {

    let token = 'asdfghjkl';
    let email = 'test@xyz.com';
    authService.verifyAccountTokenVerification(token, email).subscribe((response: HttpResponse<number>) => {
        expect(response.status).toBe(200);
    });

    const req = httpMock.expectOne(`${environment.backend_server_url}/customers/accounts?token=${token}&email=${email}`);
    expect(req.request.method).toBe('PUT');
    req.flush(new HttpResponse<number>({status: 200}));
  }));

  xit('should verify the token for forgotpassword', async( () => {
    let token = 'asdfghjkl';
    let email = 'test@xyz.com';
    authService.tokenVerification(token,email).subscribe((response: HttpResponse<number>) => {
        expect(response.status).toBe(200);
    });

    const req = httpMock.expectOne(`${environment.backend_server_url}/identity/users/token-validation/${email}?token=${token}`);
    expect(req.request.method).toBe('POST');
    req.flush(new HttpResponse<number>({status: 200}));
  }));

  xit('should update the password', async( () => {
    let token = 'asdfghjkl';
    authService.updatePassword(user).subscribe((res: HttpResponse<number>) => {
        expect(res.status).toBe(200);
    });
    const req = httpMock
      .expectOne(`${environment.backend_server_url}/identity/users/password/${user.email}?newPassword=${user.password}&token=${token}`);
    expect(req.request.method).toBe('PUT');
    req.flush(new HttpResponse<number>({status: 200}));
  }));

  xit('should not update the password', async( () => {
    let token = 'asdfghjkl';
    authService.updatePassword(user).subscribe((res: HttpResponse<number>) => {
        expect(res.status).toBe(400);
    });
    const req = httpMock
      .expectOne(`${environment.backend_server_url}/identity/users/password/${user.email}?newPassword=${user.password}&token=${token}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.params.get('token')).not.toBe('pqrstuv');
    req.flush(new HttpResponse<number>({status: 400}));
  }));

  xit('should verify the policy', async( () => {
    let policyNumber = user.policyDetails[0].policynumber.policynumber;
    authService.verifyPolicy(userService).subscribe((response) => {
      expect(response).toEqual(policyResponse);
    });

    const req = httpMock.expectOne(`${environment.backend_server_url}/personal-policies/${policyNumber}/insureds/namevalidation`);
    expect(req.request.method).toBe('PUT');
    req.flush(policyResponse);
  }));

  xit('should verify the user', async( () => {
    authService.verifyUser(userService).subscribe( (response) => {
      expect(response).toEqual(user);
    });
    const req = httpMock.expectOne(`${environment.backend_server_url}/customers/accounts/${user.email}`);
    expect(req.request.method).toBe('POST');
    req.flush(user);
  }));
});
