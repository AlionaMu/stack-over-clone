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

// switchMap(({request}) => {
//   return from(this.authService.register(request)).pipe(
//     map((currentUser: any) => {
//       console.log(currentUser.user._delegate)
//       return registerSuccessAction(currentUser.user._delegate)
//     }),
//     catchError((errorResponse: any) => {
//       return of(registerFailureAction({errors: errorResponse.code}))
//     }),
//   )
// }),

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return from(this.authService.login(request)).pipe(
          map((response: any) => {
            console.log(response)
            const currentUser = {
              email: response.user._delegate.email,
              displayName: response.user._delegate.displayName,
              uid: response.user._delegate.uid,
            }
            return loginSuccessAction({currentUser})
          }),

          catchError((errorResponse: any) => {
            console.log(errorResponse)
            return of(loginFailureAction({errors: errorResponse.code}))
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
