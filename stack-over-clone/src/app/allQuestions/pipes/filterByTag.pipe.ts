import {Pipe, PipeTransform} from '@angular/core'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Pipe({
  name: 'filterByTag',
})
export class FilterByTagPipe implements PipeTransform {
  public transform(
    questions: QuestionInterface[],
    value: string,
  ): QuestionInterface[] {
    if (value) {
      return questions.filter((item: QuestionInterface) =>
        item.tags?.includes(value),
      )
    } else {
      return questions
    }
  }
}
