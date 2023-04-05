import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {QuestionInterface} from '../../../shared/types/question.interface'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {QuestionInputInterface} from '../../../shared/types/questionInput.interface'

export const updateQuestionAction = createAction(
  ActionTypes.UPDATE_QUESTION,
  props<{questionInput: QuestionInputInterface}>(),
)

export const updateQuestionSuccessAction = createAction(
  ActionTypes.UPDATE_QUESTION_SUCCESS,
  props<{question: QuestionInterface}>(),
)

export const updateQuestionFailureAction = createAction(
  ActionTypes.UPDATE_QUESTION_FAILURE,
  props<{errors: BackendErrorsInterface}>(),
)
