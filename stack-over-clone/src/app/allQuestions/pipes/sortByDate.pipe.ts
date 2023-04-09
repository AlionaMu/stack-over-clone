import {Pipe, PipeTransform} from '@angular/core'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  public transform(
    questions: QuestionInterface[],
    value: string,
  ): QuestionInterface[] {
    const arrayForSort = [...questions]
    if (value === 'asc') {
      return arrayForSort.sort(
        (a: QuestionInterface, b: QuestionInterface) => b.date - a.date,
      )
    } else if (value === 'desc') {
      return arrayForSort.sort(
        (a: QuestionInterface, b: QuestionInterface) => a.date - b.date,
      )
    } else {
      return questions
    }
  }
}
