import {createSelector, createFeatureSelector} from '@ngrx/store'
import {QuestionStateInterface} from '../types/questionState.interface'

export const questionFeatureSelector =
  createFeatureSelector<QuestionStateInterface>('question')

export const isLoadingSelector = createSelector(
  questionFeatureSelector,
  (questionState: QuestionStateInterface) => questionState.isLoading,
)

export const errorSelector = createSelector(
  questionFeatureSelector,
  (questionState: QuestionStateInterface) => questionState.error,
)

export const questionSelector = createSelector(
  questionFeatureSelector,
  (questionState: QuestionStateInterface) => questionState.question,
)

export const isSubmittingSelector = createSelector(
  questionFeatureSelector,
  (QuestionState: QuestionStateInterface) => QuestionState.isSubmitting,
)
