import {Pipe, PipeTransform} from '@angular/core'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Pipe({
  name: 'filterByTag',
})
export class FilterByTagPipe implements PipeTransform {
  public transform(
    questions: QuestionInterface[],
    value: string[],
  ): QuestionInterface[] {
    if (value && questions) {
      return questions.filter((item: QuestionInterface) => {
        return value.every((itemValue: string) =>
          item.tags?.includes(itemValue),
        )
      })
    } else {
      return questions
    }
  }
}
