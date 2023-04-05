import {QuestionInterface} from '../../shared/types/question.interface'
import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'

export interface EditQuestionStateInterface {
  question: QuestionInterface | null
  isLoading: boolean
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
