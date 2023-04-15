import {Router} from '@angular/router'
import {PersistanceService} from './../../../shared/services/persistance.service'
import {catchError, map, switchMap, tap} from 'rxjs/operators'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {
  logoutAction,
  logoutFailureAction,
  logoutSuccessAction,
} from '../actions/logout.action'
import {AuthService} from '../../services/auth.service'
import {from, of} from 'rxjs'

// export class GetAllQuestionsEffect {
//   getAllQuestions$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getAllQuestionsAction),
//       switchMap(({value}) => {
//         return from(this.allQuestionsService.getAllQuestions(value)).pipe(
//           map((allQuestions: any) => {
//             return getAllQuestionsSuccessAction({allQuestions})
//           }),

//           catchError(() => {
//             return of(getAllQuestionsFailureAction())
//           }),
//         )
//       }),
//     ),
//   )

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.authService.logout()
          this.router.navigateByUrl('/')
        }),
      ),
    {dispatch: false},
  )
  // logout$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(logoutAction),
  //     switchMap(() => {
  //       return from(this.authService.logout()).pipe(
  //       map(() => {
  //         // this.router.navigateByUrl('/')
  //         return logoutSuccessAction()
  //       }),

  //       catchError(() => {
  //         return of(logoutFailureAction())
  //       }),
  //     )
  //     }),
  //   // {dispatch: false},
  // ),)

  // redirectAfterCreate$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(logoutSuccessAction),
  //       tap(() => {
  //         this.router.navigate(['/'])
  //       }),
  //     ),
  //   {dispatch: false},
  // )

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
  ) {}
}

// FirebaseAuth.getInstance().verifyIdToken(token)
// await FirebaseAuth.instance.signOut();
