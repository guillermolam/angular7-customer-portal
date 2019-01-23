interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '6fa4b695-1c04-4548-a81c-5c329d74eacd',
  domain: 'external-dev.login.sys.nonprod.us-east-1.aws.pcf.mapfreusa.com',
  callbackURL: 'https://customer-portal-ui.apps.nonprod.us-east-1.aws.pcf.mapfreusa.com/my-insurance'
};
