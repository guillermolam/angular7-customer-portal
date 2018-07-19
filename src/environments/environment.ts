// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  //backend_server_url: 'http://localhost:8084'
  //backend_server_url: 'http://mdv-docdevl01:8081'
  backend_server_url: 'https://dev.mapfreapis.com:8443',
};

//https://dev.mapfreapis.com:8443/auth/oauth/v2/token?grant_type=password&client_credentials&username=testoauth&password=Abcd!234&client_id=9e8881c6-9fd2-4113-8602-6affc18a6fdd&client_secret=01c5ebc0-8242-4025-b93d-0ad5e168b845&scope=oob
