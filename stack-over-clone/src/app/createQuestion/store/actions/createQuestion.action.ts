import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {QuestionInterface} from '../../../shared/types/question.interface'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {QuestionInputInterface} from '../../../shared/types/questionInput.interface'

export const createQuestionAction = createAction(
  ActionTypes.CREATE_QUESTION,
  props<{questionInput: QuestionInputInterface}>(),
)

export const createQuestionSuccessAction = createAction(
  ActionTypes.CREATE_QUESTION_SUCCESS,
  props<{question: QuestionInterface}>(),
)

export const createQuestionFailureAction = createAction(
  ActionTypes.CREATE_QUESTION_FAILURE,
  props<{errors: BackendErrorsInterface}>(),
)
