// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import 'zone.js/plugins/zone-error'
export const environment = {
  production: false,
  firebase: {
    projectId: 'fir-stack-over',
    appId: '1:716807091844:web:f1f3fdbab136425d8134d1',
    databaseURL:
      'https://fir-stack-over-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'fir-stack-over.appspot.com',
    apiKey: 'AIzaSyA3xBrKc9VoG68bbn9wHd_znbLnEIG27qA',
    authDomain: 'fir-stack-over.firebaseapp.com',
    messagingSenderId: '716807091844',
    automaticDataCollectionEnabled: false,
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
