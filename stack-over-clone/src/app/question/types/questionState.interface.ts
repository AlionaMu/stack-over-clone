import {QuestionInterface} from '../../shared/types/question.interface'

export interface QuestionStateInterface {
  isLoading: boolean
  error: string | null
  data: QuestionInterface | null
}
