const env=  'https://customer-portal-bff.apps.prd.us-east-1.aws.pcf.mapfreusa.com'

export const environment = {
  production: true,

  backend_server_url: env,
  backend_server_url_auth: `${env}/auth/oauth/token`,
  backend_server_url_account: `${env}/b2c-account-api`,
  backend_server_url_identity: `${env}/identity-api/users`,
  backend_server_url_identity_2: `${env}/identity-api`,
  backend_server_url_policy: `${env}/personal-policy-api`,
  backend_server_url_billing: `${env}/billing-api`,
  backend_server_url_claims: `${env}/claims-livo`

};
