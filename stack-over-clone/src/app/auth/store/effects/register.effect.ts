import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface'
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
import {Router} from '@angular/router'
import {from} from 'rxjs'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return from(this.authService.register(request)).pipe(
          map(() => {
            return registerSuccessAction()
          }),
          catchError((errorResponse: any) => {
            return of(registerFailureAction({errors: errorResponse}))
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
          this.router.navigateByUrl('/login')
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
