import {CommentInterface} from './comment.interface'
export interface QuestionInputInterface {
  title: string
  body: string
  tags?: string[]
  date: number
  slug: string
  comments?: CommentInterface[]
}
