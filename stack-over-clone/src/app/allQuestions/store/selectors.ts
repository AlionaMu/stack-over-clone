import {createSelector, createFeatureSelector} from '@ngrx/store'
import {AllQuestionsStateInterface} from '../types/allQuestionsState.interface'

export const allQuestionsFeatureSelector =
  createFeatureSelector<AllQuestionsStateInterface>('allQuestions')

export const isLoadingSelector = createSelector(
  allQuestionsFeatureSelector,
  (allQuestionsState: AllQuestionsStateInterface) =>
    allQuestionsState.isLoading,
)

export const errorSelector = createSelector(
  allQuestionsFeatureSelector,
  (allQuestionsState: AllQuestionsStateInterface) => allQuestionsState.error,
)

export const allQuestionsSelector = createSelector(
  allQuestionsFeatureSelector,
  (allQuestionsState: AllQuestionsStateInterface) =>
    allQuestionsState.questions,
)
