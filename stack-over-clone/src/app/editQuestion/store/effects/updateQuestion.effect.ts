import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {HttpErrorResponse} from '@angular/common/http'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {from, of} from 'rxjs'
import {switchMap, catchError, map, tap} from 'rxjs/operators'

import {EditQuestionService} from '../../services/editQuestion.service'
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
        console.log(questionInput) // est
        return from(
          this.editQuestionService.updateQuestion(questionInput),
        ).pipe(
          map((question: any) => {
            console.log(question)
            return updateQuestionSuccessAction({question})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateQuestionFailureAction({errors: errorResponse.error.errors}),
            )
          }),
        )
      }),
    ),
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateQuestionSuccessAction),
        tap(({question}) => {
          console.log(question)
          this.router.navigate(['/questions', question.slug])
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
