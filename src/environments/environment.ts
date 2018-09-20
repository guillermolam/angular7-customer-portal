// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular.json`.

export const environment = {
  production: false,
  api_gateway_url:    'https://dev.mapfreapis.com',
  backend_server_url: 'https://mdv-docdevl01:8081',
  identity:           'https://mdv-doctest:8082',
  account:            'https://mdv-doctest:8083',
  personalpolicy:     'https://mdv-doctest:8084'
}