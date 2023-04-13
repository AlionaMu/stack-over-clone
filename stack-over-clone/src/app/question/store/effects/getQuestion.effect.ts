import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {switchMap, catchError, map} from 'rxjs/operators'
import {from, of} from 'rxjs'
import {SharedQuestionService} from 'src/app/shared/services/sharedQuestion.service'
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
          map((question: any) => {
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
