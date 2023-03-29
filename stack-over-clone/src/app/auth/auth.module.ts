import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'

import {RegisterComponent} from './components/register/register.component'
import {LoginComponent} from './components/login/login.component'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {AuthService} from './services/auth.service'
import {PersistanceService} from '../shared/services/persistance.service'

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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
