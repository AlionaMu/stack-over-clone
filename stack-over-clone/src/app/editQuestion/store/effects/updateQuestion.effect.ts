import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {HttpErrorResponse} from '@angular/common/http'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {from, of} from 'rxjs'
import {switchMap, catchError, map, tap} from 'rxjs/operators'

import {EditQuestionService} from '../../../shared/services/editQuestion.service'
import {QuestionInterface} from '../../../shared/types/question.interface'
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
        console.log(questionInput)
        return this.editQuestionService.updateQuestion(questionInput).pipe(
          map(() => {
            console.log()
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
