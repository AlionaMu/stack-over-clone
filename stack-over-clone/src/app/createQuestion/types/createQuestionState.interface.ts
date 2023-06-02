import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'

export interface CreateQuestionStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
