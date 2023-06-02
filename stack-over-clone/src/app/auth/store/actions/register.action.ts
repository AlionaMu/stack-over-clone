import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'

export const registerAction = createAction(
  ActionTypes.REGISTRATION,
  props<{request: CurrentUserInterface}>(),
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTRATION_SUCCESS,
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTRATION_FAILURE,
  props<{errors: BackendErrorsInterface}>(),
)
