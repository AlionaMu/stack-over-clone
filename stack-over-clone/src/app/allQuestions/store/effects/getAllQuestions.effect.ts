import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {switchMap, catchError, map} from 'rxjs/operators'
import {from, of} from 'rxjs'

import {GetAllQuestionsResponseInterface} from './../../types/getAllQuestionsResponse.interface'
import {AllQuestionsService} from '../../services/allQuestions.service'
import {
  getAllQuestionsAction,
  getAllQuestionsSuccessAction,
  getAllQuestionsFailureAction,
} from '../actions/getAllQuestions.action'

@Injectable()
export class GetAllQuestionsEffect {
  getAllQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllQuestionsAction),
      switchMap(({value}) => {
        return from(this.allQuestionsService.getAllQuestions(value)).pipe(
          map((allQuestions: any) => {
            return getAllQuestionsSuccessAction({allQuestions})
          }),

          catchError(() => {
            return of(getAllQuestionsFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private allQuestionsService: AllQuestionsService,
  ) {}
}
