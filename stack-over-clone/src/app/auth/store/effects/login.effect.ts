import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {switchMap, catchError, map, tap} from 'rxjs/operators'
import {from, of} from 'rxjs'

import {CurrentUserInterface} from './../../../shared/types/currentUser.interface'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {AuthService} from './../../services/auth.service'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from '../actions/login.action'

// this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
//   localStorage.setItem('token','true');

//   if(res.user?.emailVerified == true) {
//     this.router.navigate(['dashboard']);
//   } else {
//     this.router.navigate(['/varify-email']);
//   }

// }, err => {
//   alert(err.message);
//   this.router.navigate(['/login']);
// })

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
            // this.persistanceService.set('accessToken', response.user._delegate.accessToken);
            return loginSuccessAction({currentUser})
          }),

          catchError((errorResponse: any) => {
            console.log(errorResponse)
            return of(loginFailureAction(errorResponse))
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
    private persistanceService: PersistanceService,
    private router: Router,
  ) {}
}
