import {Pipe, PipeTransform} from '@angular/core'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Pipe({
  name: 'filterByLogged',
})
export class FilterByLoggedPipe implements PipeTransform {
  public transform(
    questions: QuestionInterface[],
    value: boolean,
  ): QuestionInterface[] {
    if (!value && questions) {
      return questions.filter((item: QuestionInterface) => item.approved)
    } else {
      return questions
    }
  }
}
