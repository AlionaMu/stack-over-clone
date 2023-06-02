import {Pipe, PipeTransform} from '@angular/core'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Pipe({
  name: 'filterByAuthor',
})
export class FilterByAuthorPipe implements PipeTransform {
  public transform(
    questions: QuestionInterface[],
    value: string,
  ): QuestionInterface[] {
    if (value) {
      return questions.filter((item: QuestionInterface) =>
        item.author
          ? item.author
            ? item.author.name
              ? item.author.name === value
                ? true
                : false
              : false
            : false
          : false,
      )
    } else {
      return questions
    }
  }
}
