import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {switchMap, catchError, map, tap} from 'rxjs/operators'
import {from, of} from 'rxjs'

import {QuestionService} from 'src/app/question/services/question.service'
import {
  deleteQuestionAction,
  deleteQuestionFailureAction,
  deleteQuestionSuccessAction,
} from '../actions/deleteQuestion.action'

@Injectable()
export class DeleteQuestionEffect {
  // deleteQuestion$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(deleteQuestionAction),
  //     switchMap(({ slug }) => {
  //       return from(this.questionService.deleteQuestion(slug)).pipe(
  //         map(() => {
  //           return deleteQuestionSuccessAction();
  //         }),

  //         catchError(() => {
  //           return of(deleteQuestionFailureAction());
  //         })
  //       );
  //     })
  //   )
  // );

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteQuestionSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        }),
      ),
    {dispatch: false},
  )

  constructor(
    private actions$: Actions,
    private questionService: QuestionService,
    private router: Router,
  ) {}
}
