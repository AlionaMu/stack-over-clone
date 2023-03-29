import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface'
import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'

export const registerAction = createAction(
  ActionTypes.REGISTRATION,
  props<{request: RegisterRequestInterface}>(),
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTRATION_SUCCESS,
  props<{currentUser: CurrentUserInterface}>(),
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTRATION_FAILURE,
  props<{errors: BackendErrorsInterface}>(),
)
