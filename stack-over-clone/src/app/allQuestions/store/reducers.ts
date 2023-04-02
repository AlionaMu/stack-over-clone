import { routerNavigationAction } from '@ngrx/router-store';

import {
  getAllQuestionsAction,
  getAllQuestionsSuccessAction,
  getAllQuestionsFailureAction,
} from './actions/getAllQuestions.action';
import { createReducer, on, Action } from '@ngrx/store';
import { AllQuestionsStateInterface } from '../types/allQuestionsState.interface';

const initialState: AllQuestionsStateInterface = {
  questions: null,
  isLoading: false,
  error: null,
};

const allQuestionsReducer = createReducer(
  initialState,
  on(
    getAllQuestionsAction,
    (state): AllQuestionsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getAllQuestionsSuccessAction,
    (state, action): AllQuestionsStateInterface => ({
      ...state,
      isLoading: false,
      questions: action.allQuestions,
    })
  ),
  on(
    getAllQuestionsFailureAction,
    (state): AllQuestionsStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): AllQuestionsStateInterface => initialState)
);

export function reducers(state: AllQuestionsStateInterface, action: Action) {
  return allQuestionsReducer(state, action);
}
