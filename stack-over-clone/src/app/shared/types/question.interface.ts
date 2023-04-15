import {CommentInterface} from './comment.interface'

export interface QuestionInterface {
  author: string
  title: string
  body: string
  tags?: string[]
  date: number
  slug: string
  comments?: CommentInterface[]
  isAnswered: boolean
}
