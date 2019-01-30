interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '49216e71-e530-4480-a69d-576de3b759a4',
  domain: 'external-dev.login.sys.nonprod.us-east-1.aws.pcf.mapfreusa.com/oauth',
  callbackURL: 'https://customer-portal-ui.apps.nonprod.us-east-1.aws.pcf.mapfreusa.com/my-insurance'
};
