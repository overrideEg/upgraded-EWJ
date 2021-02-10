// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr: false,
    clientId: 'Y29tLm92ZXJyaWRlZWcuaGF3emVuLmFwcHMuZWR1LXByb21pc2U=' ,
    fileAuth:'bmV0Lm92ZXJyaWRlZWcuc2VydmljZXMuZmlsZVVwbG9hZA==',
    // serverUrl: 'http://localhost:3050/v1',
    serverUrl:'http://ec2-54-75-162-129.eu-west-1.compute.amazonaws.com:8080/v1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
