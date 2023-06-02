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
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

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
          catchError((errorResponse: BackendErrorsInterface) => {
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
