import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {from, of} from 'rxjs'
import {switchMap, catchError, map, tap} from 'rxjs/operators'
import {EditQuestionService} from 'src/app/shared/services/editQuestion.service'
import {
  updateQuestionAction,
  updateQuestionSuccessAction,
  updateQuestionFailureAction,
} from '../actions/updateQuestion.action'

@Injectable()
export class UpdateQuestionEffect {
  updateQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateQuestionAction),
      switchMap(({questionInput}) => {
        return from(
          this.editQuestionService.updateQuestion(questionInput),
        ).pipe(
          map(() => {
            return updateQuestionSuccessAction()
          }),

          catchError(() => {
            return of(updateQuestionFailureAction())
          }),
        )
      }),
    ),
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateQuestionSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        }),
      ),
    {dispatch: false},
  )

  constructor(
    private actions$: Actions,
    private editQuestionService: EditQuestionService,
    private router: Router,
  ) {}
}
