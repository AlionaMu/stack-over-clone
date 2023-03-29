import {environment} from './../environments/environment'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import {initializeApp, provideFirebaseApp} from '@angular/fire/app'
import {provideAuth, getAuth} from '@angular/fire/auth'
import {provideDatabase, getDatabase} from '@angular/fire/database'
import {provideFirestore, getFirestore} from '@angular/fire/firestore'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AuthModule} from './auth/auth.module'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {PersistanceService} from './shared/services/persistance.service'
import {AuthInterceptor} from './shared/services/authinterceptor.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
