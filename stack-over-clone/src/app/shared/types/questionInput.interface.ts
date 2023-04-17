import {CurrentUserInputInterface} from './currentUserInput.interface'
import {CommentInterface} from './comment.interface'
export interface QuestionInputInterface {
  title: string
  body: string
  tags?: string[]
  date: number
  slug: string
  comments?: CommentInterface[]
  isAnswered: boolean
  author: CurrentUserInputInterface | null
}
