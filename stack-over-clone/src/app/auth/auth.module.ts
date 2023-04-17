import {GetRandomIdService} from './../shared/services/getRandomId.service'
import {LogoutEffect} from './store/effects/logout.effect'
import {LoginEffect} from './store/effects/login.effect'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox'

import {RegisterComponent} from './components/register/register.component'
import {LoginComponent} from './components/login/login.component'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {AuthService} from './services/auth.service'
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessage/backendErrorMessage.module'
import {GetCurrentUserEffect} from './store/effects/getCurrentUser.effect'
import {getAuth, provideAuth} from '@angular/fire/auth'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, GetRandomIdService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      LogoutEffect,
      GetCurrentUserEffect,
      RegisterEffect,
    ]),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BackendErrorMessagesModule,
    MatCheckboxModule,
  ],
})
export class AuthModule {}
