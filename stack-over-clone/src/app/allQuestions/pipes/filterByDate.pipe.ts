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
    const daySec = 3600000 // 86400  /hour --test
    const twoDaysSec = 7200000 // 172800  /2-hours  --test
    const weekSec = 10800000 // 604800  /3-hours  --test

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
