import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {QuestionInputInterface} from '../../../shared/types/questionInput.interface'

export const createQuestionAction = createAction(
  ActionTypes.CREATE_QUESTION,
  props<{questionInput: QuestionInputInterface}>(),
)

export const createQuestionSuccessAction = createAction(
  ActionTypes.CREATE_QUESTION_SUCCESS,
)

export const createQuestionFailureAction = createAction(
  ActionTypes.CREATE_QUESTION_FAILURE,
)
