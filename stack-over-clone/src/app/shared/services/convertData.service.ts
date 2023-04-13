import {CommentInterface} from './../types/comment.interface'
import {Injectable} from '@angular/core'
import {QuestionInterface} from '../types/question.interface'

@Injectable()
export class ConvertDataService {
  constructor() {}

  convertObj(value: CommentInterface, question: QuestionInterface | null) {
    const obj = Object.assign<any, QuestionInterface | null, any>(
      {},
      question,
      {comments: [...(question?.comments as []), value]},
    )
    return obj
  }

  convertAnswerInObj(value: string, question: QuestionInterface | null) {
    const commentsArr = question?.comments?.map((item: CommentInterface) => {
      if (item.date === value) {
        return Object.assign<any, CommentInterface | null, any>({}, item, {
          isRightAnswer: true,
        })
      } else {
        return Object.assign<any, CommentInterface | null, any>({}, item, {
          isRightAnswer: false,
        })
      }
    })
    const obj = Object.assign<any, QuestionInterface | null, any>(
      {},
      question,
      {comments: [...(commentsArr as [])]},
    )
    const questionObj = Object.assign<any, QuestionInterface | null, any>(
      {},
      obj,
      {isAnswered: true},
    )
    return questionObj
  }
}
