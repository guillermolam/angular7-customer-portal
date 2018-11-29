// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular.json`.

export const environment = {
  production: false,
  backend_auth_server_url: 'https://mdv-doctest:443/auth',
  backend_server_url: 'https://mdv-doctest:443/apis'
  // backend_auth_server_url: 'https://10.175.0.168:443/auth',
  // backend_server_url: 'https://10.175.0.168:443/apis'
}
