import {SettingPanelModule} from './settingPanel/settingPanel.module'
import {EditQuestionModule} from 'src/app/editQuestion/editQuestion.module'
import {QuestionModule} from './question/question.module'
import {AllQuestionsModule} from './allQuestions/allQuestions.module'
import {CoreModule} from './core/core.module'
import {environment} from './../environments/environment'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {CreateQuestionModule} from './createQuestion/createQuestion.module'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AuthModule} from './auth/auth.module'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {HttpClientModule} from '@angular/common/http'
import {routerReducer} from '@ngrx/router-store'
import {UserProfileModule} from './userProfile/userProfile.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    CreateQuestionModule,
    AllQuestionsModule,
    QuestionModule,
    EditQuestionModule,
    SettingPanelModule,
    UserProfileModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({router: routerReducer}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
