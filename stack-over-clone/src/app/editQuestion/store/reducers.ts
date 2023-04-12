import {on, createReducer, Action} from '@ngrx/store'

import {EditQuestionStateInterface} from '../types/editQuestionState.interface'
import {
  getQuestionAction,
  getQuestionFailureAction,
  getQuestionSuccessAction,
} from './actions/getQuestion.action'
import {
  updateQuestionAction,
  updateQuestionFailureAction,
  updateQuestionSuccessAction,
} from './actions/updateQuestion.action'

const initialState: EditQuestionStateInterface = {
  question: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
}

const editQuestionReducer = createReducer(
  initialState,
  on(
    updateQuestionAction,
    (state): EditQuestionStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(updateQuestionSuccessAction, (): any => ({
    isSubmitting: false,
  })),
  on(
    updateQuestionFailureAction,
    (state): EditQuestionStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),
  on(
    getQuestionAction,
    (state): EditQuestionStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getQuestionSuccessAction,
    (state, action): EditQuestionStateInterface => ({
      ...state,
      isLoading: false,
      question: action.question,
    }),
  ),
  on(
    getQuestionFailureAction,
    (state): EditQuestionStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
)

export function reducers(state: EditQuestionStateInterface, action: Action) {
  return editQuestionReducer(state, action)
}
