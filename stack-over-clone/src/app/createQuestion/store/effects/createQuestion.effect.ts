import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {from, of} from 'rxjs'
import {switchMap, catchError, map, tap} from 'rxjs/operators'
import {CreateQuestionService} from '../../services/createQuestion.service'
import {
  createQuestionAction,
  createQuestionSuccessAction,
  createQuestionFailureAction,
} from '../actions/createQuestion.action'

@Injectable()
export class CreateQuestionEffect {
  createQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createQuestionAction),
      switchMap(({questionInput}) => {
        return from(
          this.createQuestionService.createQuestion(questionInput),
        ).pipe(
          map(() => {
            return createQuestionSuccessAction()
          }),

          catchError(() => {
            return of(createQuestionFailureAction())
          }),
        )
      }),
    ),
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createQuestionSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        }),
      ),
    {dispatch: false},
  )

  constructor(
    private actions$: Actions,
    private createQuestionService: CreateQuestionService,
    private router: Router,
  ) {}
}
