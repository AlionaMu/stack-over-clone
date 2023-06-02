import {createReducer, on, Action} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'

import {QuestionStateInterface} from '../types/questionState.interface'
import {
  getQuestionAction,
  getQuestionSuccessAction,
  getQuestionFailureAction,
} from './actions/getQuestion.action'
import {
  updateQuestionAction,
  updateQuestionSuccessAction,
  updateQuestionFailureAction,
} from './actions/updateQuestion.action'

const initialState: QuestionStateInterface = {
  question: null,
  isLoading: false,
  error: null,
  isSubmitting: false,
}

const questionReducer = createReducer(
  initialState,
  on(
    getQuestionAction,
    (state): QuestionStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getQuestionSuccessAction,
    (state, action): QuestionStateInterface => ({
      ...state,
      isLoading: false,
      question: action.question,
    }),
  ),
  on(
    getQuestionFailureAction,
    (state): QuestionStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  on(
    updateQuestionAction,
    (state): QuestionStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(
    updateQuestionSuccessAction,
    (state): QuestionStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),
  on(
    updateQuestionFailureAction,
    (state): QuestionStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),

  on(routerNavigationAction, (): QuestionStateInterface => initialState),
)

export function reducers(state: QuestionStateInterface, action: Action) {
  return questionReducer(state, action)
}
