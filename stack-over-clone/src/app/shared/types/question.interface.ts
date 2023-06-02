import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {CommentInterface} from './comment.interface'

export interface QuestionInterface {
  author: CurrentUserInterface | null
  title: string
  body: string
  tags?: string[]
  date: number
  slug: string
  comments?: CommentInterface[]
  isAnswered: boolean
  approved: boolean
}
