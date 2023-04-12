import {on, createReducer, Action} from '@ngrx/store'

import {CreateQuestionStateInterface} from '../types/createQuestionState.interface'
import {
  createQuestionAction,
  createQuestionFailureAction,
  createQuestionSuccessAction,
} from './actions/createQuestion.action'

const initialState: CreateQuestionStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

const createQuestionReducer = createReducer(
  initialState,
  on(
    createQuestionAction,
    (state): CreateQuestionStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(
    createQuestionSuccessAction,
    (state): CreateQuestionStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),
  on(
    createQuestionFailureAction,
    (state): CreateQuestionStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),
)

export function reducers(state: CreateQuestionStateInterface, action: Action) {
  return createQuestionReducer(state, action)
}
