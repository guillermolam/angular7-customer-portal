// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular.json`.

const env = 'https://mdv-doctest'

export const environment = {
  production: false,

  backend_server_url: `${env}`,
  backend_server_url_auth: `${env}:443/auth/grant_type=password`,
  backend_server_url_account: `${env}:8083/customers/accounts`,
  backend_server_url_identity: `${env}:8087/identity/users`,
  backend_server_url_policy: `${env}:8084/personal-policies`,
  backend_server_url_billing: `${env}:8086/billing`,
  backend_server_url_claims: `${env}:8085/claims`

}
