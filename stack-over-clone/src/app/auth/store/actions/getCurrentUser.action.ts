import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {createAction, props} from '@ngrx/store'
import {LoginRequestInterface} from '../../types/loginRequest.interface'
import {ActionTypes} from '../actionTypes'

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER)

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: any}>(), //CurrentUserInterface
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE,
)
