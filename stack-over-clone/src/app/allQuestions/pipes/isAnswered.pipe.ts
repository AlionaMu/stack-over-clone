import {QuestionInterface} from 'src/app/shared/types/question.interface'
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'isAnswered',
})
export class isAnsweredPipe implements PipeTransform {
  public transform(questions: QuestionInterface[], value: boolean | null) {
    if (value === true) {
      return questions.filter(
        (item: QuestionInterface) => item.isAnswered === value,
      )
    } else if (value === false) {
      return questions.filter(
        (item: QuestionInterface) => item.isAnswered === value,
      )
    } else {
      return questions
    }
  }
}
