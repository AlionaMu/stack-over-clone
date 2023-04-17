import {QuestionInterface} from 'src/app/shared/types/question.interface'
import {GetAllQuestionsResponseInterface} from './getAllQuestionsResponse.interface'

export interface AllQuestionsStateInterface {
  isLoading: boolean
  error: string | null
  questions: GetAllQuestionsResponseInterface | null
}
