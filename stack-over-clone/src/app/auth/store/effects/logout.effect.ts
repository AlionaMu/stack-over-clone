import {Router} from '@angular/router'
import {PersistanceService} from './../../../shared/services/persistance.service'
import {tap} from 'rxjs/operators'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {logoutAction} from '../actions/logout.action'

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persistanceService.set('accessToken', '')
          this.router.navigateByUrl('/')
        }),
      ),
    {dispatch: false},
  )

  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router,
  ) {}
}

// FirebaseAuth.getInstance().verifyIdToken(token)
// await FirebaseAuth.instance.signOut();
