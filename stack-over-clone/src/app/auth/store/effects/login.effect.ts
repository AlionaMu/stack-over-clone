import {SettingsService} from 'src/app/shared/services/settings.service'
import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {Router} from '@angular/router'
import {switchMap, catchError, map, tap} from 'rxjs/operators'
import {from, of} from 'rxjs'

import {CurrentUserInterface} from './../../../shared/types/currentUser.interface'
import {AuthService} from './../../services/auth.service'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from '../actions/login.action'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return from(this.authService.login(request)).pipe(
          map((currentUser: CurrentUserInterface) => {
            return loginSuccessAction({currentUser})
          }),

          catchError((errorResponse: BackendErrorsInterface) => {
            return of(loginFailureAction({errors: errorResponse}))
          }),
        )
      }),
    ),
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
          this.settingsService.isLoggedIn = true
        }),
      ),
    {dispatch: false},
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private settingsService: SettingsService,
  ) {}
}
