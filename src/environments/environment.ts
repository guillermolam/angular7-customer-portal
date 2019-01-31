// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular.json`.

export const environment = {
  production: false,
  backend_auth_server_url: 'http://mdv-doctest02:443/auth',
  backend_server_url:     'https://mdv-doctest02:443/apis',
  
  backend_server_cu:      'https://mdv-doctest02:8083',
  backend_server_pp:      'https://mdv-doctest02:8084',
  backend_server_mk:      'https://mdv-doctest02:8085',
  backend_server_id:      'https://mdv-doctest02:8087',
  backend_server_bl:      'https://mdv-doctest02:8086',
}
