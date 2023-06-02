import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {QuestionInterface} from './../../../shared/types/question.interface'

export const getQuestionAction = createAction(
  ActionTypes.GET_QUESTION,
  props<{slug: string}>(),
)

export const getQuestionSuccessAction = createAction(
  ActionTypes.GET_QUESTION_SUCCESS,
  props<{question: QuestionInterface}>(),
)

export const getQuestionFailureAction = createAction(
  ActionTypes.GET_QUESTION_FAILURE,
)
