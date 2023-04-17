import {currentUserSelector} from './../selectors'
import {AuthResponseInterface} from './../../types/authResponse.interface'
import {LoginRequestInterface} from './../../types/loginRequest.interface'
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

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return from(this.authService.login(request)).pipe(
          map((currentUser: CurrentUserInterface | any) => {
            return loginSuccessAction({currentUser})
          }),

          catchError((errorResponse: any) => {
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
        }),
      ),
    {dispatch: false},
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
