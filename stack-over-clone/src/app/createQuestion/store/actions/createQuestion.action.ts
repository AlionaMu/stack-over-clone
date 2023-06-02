import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {QuestionInterface} from '../../../shared/types/question.interface'

export const createQuestionAction = createAction(
  ActionTypes.CREATE_QUESTION,
  props<{questionInput: QuestionInterface}>(),
)

export const createQuestionSuccessAction = createAction(
  ActionTypes.CREATE_QUESTION_SUCCESS,
)

export const createQuestionFailureAction = createAction(
  ActionTypes.CREATE_QUESTION_FAILURE,
)
