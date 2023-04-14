import {createFeatureSelector, createSelector} from '@ngrx/store'
import {EditQuestionStateInterface} from '../types/editQuestionState.interface'

export const editQuestionFeatureSelector =
  createFeatureSelector<EditQuestionStateInterface>('editQuestion')

export const questionSelector = createSelector(
  editQuestionFeatureSelector,
  (createQuestionState: EditQuestionStateInterface) =>
    createQuestionState.question,
)

export const isLoadingSelector = createSelector(
  editQuestionFeatureSelector,
  (createQuestionState: EditQuestionStateInterface) =>
    createQuestionState.isLoading,
)

export const isSubmittingSelector = createSelector(
  editQuestionFeatureSelector,
  (createQuestionState: EditQuestionStateInterface) =>
    createQuestionState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  editQuestionFeatureSelector,
  (createQuestionState: EditQuestionStateInterface) =>
    createQuestionState.validationErrors,
)
