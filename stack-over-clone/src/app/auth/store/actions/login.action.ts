import {BackendErrorsInterface} from './../../../shared/types/backendErrors.interface'
import {CurrentUserInterface} from './../../../shared/types/currentUser.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: CurrentUserInterface}>(),
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface | null}>(),
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorsInterface}>(),
)
