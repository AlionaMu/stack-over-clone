import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { CreateQuestionService } from '../../services/createQuestion.service';
import { QuestionInterface } from './../../../shared/types/question.interface';
import {
  createQuestionAction,
  createQuestionSuccessAction,
  createQuestionFailureAction,
} from '../actions/createQuestion.action';

@Injectable()
export class CreateQuestionEffect {
  createQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createQuestionAction),
      switchMap(({ questionInput }) => {
        return this.createQuestionService.createQuestion(questionInput).pipe(
          map((question: QuestionInterface) => {
            return createQuestionSuccessAction({ question });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createQuestionFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createQuestionSuccessAction),
        tap(({ question }) => {
          this.router.navigate(['/questions', question.slug]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private createQuestionService: CreateQuestionService,
    private router: Router
  ) {}
}
