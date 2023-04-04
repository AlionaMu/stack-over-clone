import {createReducer, on, Action} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'

import {QuestionStateInterface} from '../types/questionState.interface'
import {
  getQuestionAction,
  getQuestionSuccessAction,
  getQuestionFailureAction,
} from './actions/getQuestion.action'

const initialState: QuestionStateInterface = {
  data: null,
  isLoading: false,
  error: null,
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
      data: action.question,
    }),
  ),
  on(
    getQuestionFailureAction,
    (state): QuestionStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
  on(routerNavigationAction, (): QuestionStateInterface => initialState),
)

export function reducers(state: QuestionStateInterface, action: Action) {
  return questionReducer(state, action)
}
