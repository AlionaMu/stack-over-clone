import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {QuestionInputInterface} from '../../../shared/types/questionInput.interface'

export const updateQuestionAction = createAction(
  ActionTypes.UPDATE_QUESTION,
  props<{questionInput: QuestionInputInterface}>(),
)

export const updateQuestionSuccessAction = createAction(
  ActionTypes.UPDATE_QUESTION_SUCCESS,
)

export const updateQuestionFailureAction = createAction(
  ActionTypes.UPDATE_QUESTION_FAILURE,
)
