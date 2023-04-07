import {QuestionInterface} from '../../shared/types/question.interface'

export interface QuestionStateInterface {
  isLoading: boolean
  error: string | null
  question: QuestionInterface | null
  isSubmitting: boolean
}
