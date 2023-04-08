import {CommentInterface} from './../types/comment.interface'
import {Injectable} from '@angular/core'
import {QuestionInterface} from '../types/question.interface'

@Injectable()
export class ConvertDataService {
  constructor() {}

  convertObj(value: CommentInterface, question: QuestionInterface | null) {
    console.log(value, question)
    const obj = Object.assign<any, QuestionInterface | null, any>(
      {},
      question,
      {comments: [...(question?.comments as []), value]},
    )
    return obj
  }
}
