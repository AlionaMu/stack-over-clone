import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {QuestionInterface} from './../../../shared/types/question.interface'

export const deleteQuestionAction = createAction(
  ActionTypes.DELETE_QUESTION,
  props<{slug: string}>(),
)

export const deleteQuestionSuccessAction = createAction(
  ActionTypes.DELETE_QUESTION_SUCCESS,
)

export const deleteQuestionFailureAction = createAction(
  ActionTypes.DELETE_QUESTION_FAILURE,
)
