import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'

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
