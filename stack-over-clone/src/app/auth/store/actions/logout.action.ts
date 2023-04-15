import {createAction} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'

export const logoutAction = createAction(ActionTypes.LOGOUT)

export const logoutSuccessAction = createAction(ActionTypes.LOGOUT_SUCCESS)

export const logoutFailureAction = createAction(ActionTypes.LOGOUT_FAILURE)

// export const loginAction = createAction(
//   ActionTypes.LOGIN,
//   props<{request: LoginRequestInterface}>(),
// )

// export const loginSuccessAction = createAction(
//   ActionTypes.LOGIN_SUCCESS,
//   props<{currentUser: CurrentUserInterface}>(),
// )

// export const loginFailureAction = createAction(
//   ActionTypes.LOGIN_FAILURE,
//   props<{errors: any}>(), // BackendErrorsInterface
// )
