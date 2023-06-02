import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

export const getAllQuestionsAction = createAction(
  ActionTypes.GET_ALL_QUESTIONS,
  props<{value: string}>(),
)

export const getAllQuestionsSuccessAction = createAction(
  ActionTypes.GET_ALL_QUESTIONS_SUCCESS,
  props<{allQuestions: QuestionInterface[]}>(),
)

export const getAllQuestionsFailureAction = createAction(
  ActionTypes.GET_ALL_QUESTIONS_FAILURE,
)
