import {PersistanceService} from '../../../shared/services/persistance.service'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface'
import {AuthService} from '../../services/auth.service'
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './../actions/register.action'
import {Injectable} from '@angular/core'
import {createEffect} from '@ngrx/effects'
import {Actions, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {from} from 'rxjs'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return from(this.authService.register(request)).pipe(
          map((currentUser: any) => {
            this.persistanceService.set('accessToken', currentUser.token)
            // window.localStorage.setItem('accessToken', currentUser.token)
            return registerSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({errors: errorResponse.error.errors}),
            )
          }),
        )
      }),
    ),
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
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
