import { GetAllQuestionsResponseInterface } from './../../types/getAllQuestionsResponse.interface';
import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';

export const getAllQuestionsAction = createAction(
  ActionTypes.GET_ALL_QUESTIONS,
  props<{ value: string }>()
);

export const getAllQuestionsSuccessAction = createAction(
  ActionTypes.GET_ALL_QUESTIONS_SUCCESS,
  props<{ allQuestions: GetAllQuestionsResponseInterface }>()
);

export const getAllQuestionsFailureAction = createAction(ActionTypes.GET_ALL_QUESTIONS_FAILURE);
