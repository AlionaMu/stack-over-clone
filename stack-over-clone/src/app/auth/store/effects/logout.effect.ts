import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {logoutAction} from '../actions/logout.action'
import {tap} from 'rxjs'
import {SettingsService} from 'src/app/shared/services/settings.service'

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.router.navigateByUrl('/')
          this.settingsService.isLoggedIn = false
          this.settingsService.filterByNotApproved = false
        }),
      ),
    {dispatch: false},
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    private settingsService: SettingsService,
  ) {}
}
