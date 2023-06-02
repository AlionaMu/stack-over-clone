import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {from, of} from 'rxjs'
import {switchMap, catchError, map} from 'rxjs/operators'

import {SharedQuestionService} from '../../../shared/services/sharedQuestion.service'
import {QuestionInterface} from './../../../shared/types/question.interface'
import {
  getQuestionAction,
  getQuestionSuccessAction,
  getQuestionFailureAction,
} from '../actions/getQuestion.action'

@Injectable()
export class GetQuestionEffect {
  getQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuestionAction),
      switchMap(({slug}) => {
        return from(this.sharedQuestionService.getQuestion(slug)).pipe(
          map((question: QuestionInterface) => {
            return getQuestionSuccessAction({question})
          }),

          catchError(() => {
            return of(getQuestionFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private sharedQuestionService: SharedQuestionService,
  ) {}
}
