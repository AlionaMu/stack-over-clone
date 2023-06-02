import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {QuestionInterface} from '../../../shared/types/question.interface'

export const updateQuestionAction = createAction(
  ActionTypes.UPDATE_QUESTION,
  props<{questionInput: QuestionInterface}>(),
)

export const updateQuestionSuccessAction = createAction(
  ActionTypes.UPDATE_QUESTION_SUCCESS,
)

export const updateQuestionFailureAction = createAction(
  ActionTypes.UPDATE_QUESTION_FAILURE,
)
