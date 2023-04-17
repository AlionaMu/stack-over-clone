import {Pipe, PipeTransform} from '@angular/core'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Pipe({
  name: 'filterByApproved',
})
export class FilterByApprovedPipe implements PipeTransform {
  public transform(
    questions: QuestionInterface[],
    value: boolean,
  ): QuestionInterface[] {
    if (!value && questions) {
      return questions.filter((item: QuestionInterface) =>
        item
          ? item.approved
            ? item.approved === true
              ? true
              : false
            : false
          : false,
      )
    } else {
      return questions
    }
  }
}
