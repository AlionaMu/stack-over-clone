import {Pipe, PipeTransform} from '@angular/core'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Pipe({
  name: 'filterByDate',
})
export class FilterByDatePipe implements PipeTransform {
  public transform(
    questions: QuestionInterface[],
    value: string,
  ): QuestionInterface[] {
    const daySec = 86400000
    const twoDaysSec = 172800000
    const weekSec = 604800000

    if (value === 'day') {
      return questions.filter(
        (item: QuestionInterface) => Date.now() - item.date < daySec,
      )
    } else if (value === 'two-days') {
      return questions.filter(
        (item: QuestionInterface) => Date.now() - item.date < twoDaysSec,
      )
    } else if (value === 'week') {
      return questions.filter(
        (item: QuestionInterface) => Date.now() - item.date < weekSec,
      )
    } else {
      return questions
    }
  }
}
