import {QuestionInterface} from 'src/app/shared/types/question.interface'

export interface AllQuestionsStateInterface {
  isLoading: boolean
  error: string | null
  questions: QuestionInterface[] | null
  questionsCount: number
}
