import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {switchMap, catchError, map} from 'rxjs/operators'
import {from, of} from 'rxjs'

import {CurrentUserInterface} from './../../../shared/types/currentUser.interface'
import {AuthService} from './../../services/auth.service'
import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  getCurrentUserFailureAction,
} from '../actions/getCurrentUser.action'

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((currentUser: any) => {
            return getCurrentUserSuccessAction({currentUser})
          }),

          catchError(() => {
            return of(getCurrentUserFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
