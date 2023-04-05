import {EditQuestionStateInterface} from './../../editQuestion/types/editQuestionState.interface'
import {AllQuestionsStateInterface} from 'src/app/allQuestions/types/allQuestionsState.interface'
import {QuestionStateInterface} from 'src/app/question/types/questionState.interface'
import {AuthStateInterface} from '../../auth/types/authState.interface'
import {CreateQuestionStateInterface} from './../../createQuestion/types/createQuestionState.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  createQuestion: CreateQuestionStateInterface
  allQuestions: AllQuestionsStateInterface
  question: QuestionStateInterface
  editQuestion: EditQuestionStateInterface
}
