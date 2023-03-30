import {AppStateInterface} from './../../shared/types/appState.interface'
import {createFeatureSelector, createSelector} from '@ngrx/store'
import {CreateQuestionStateInterface} from '../types/createQuestionState.interface'

export const CreateQuestionFeatureSelector =
  createFeatureSelector<CreateQuestionStateInterface>('createQuestion')

export const isSubmittingSelector = createSelector(
  CreateQuestionFeatureSelector,
  (createQuestionState: CreateQuestionStateInterface) =>
    createQuestionState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  CreateQuestionFeatureSelector,
  (createQuestionState: CreateQuestionStateInterface) =>
    createQuestionState.validationErrors,
)
