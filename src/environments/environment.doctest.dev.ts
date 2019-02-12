const env = 'https://mdv-doctest:443'

export const environment = {
  production: false,
  backend_server_url_auth: `${env}/auth`,
  backend_server_url_account: `${env}/apis/customers/accounts`,
  backend_server_url_identity: `${env}/apis/identity/users`,
  backend_server_url_identity_2: `${env}/apis/identity`,
  backend_server_url_policy: `${env}/apis/personal-policies`,
  backend_server_url_billing: `${env}/apis/billing`,
  backend_server_url_claims: `${env}/apis/claims`
}
