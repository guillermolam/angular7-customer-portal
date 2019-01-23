interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'MrI27GNwdOIxM7wBbtgIimWbdsaVXWBI',
  domain: 'mapfreb2c-usa.auth0.com',
  callbackURL: 'http://localhost:4200/login'
};
