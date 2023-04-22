import {UtilsService} from './../../shared/services/utils.service'
import {PaginationInfoInterface} from './../components/allQuestions/allQuestions.component'
import {Pipe, PipeTransform} from '@angular/core'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

import {SettingsService} from 'src/app/shared/services/settings.service'

@Pipe({
  name: 'filterByPage',
})
export class FilterByPagePipe implements PipeTransform {
  public transform(
    questions: QuestionInterface[],
    currentPage: number,
  ): QuestionInterface[] {
    const pagesCount = 5

    if (currentPage && questions) {
      if (currentPage < 1) {
        currentPage = 1
      }
      if (currentPage > pagesCount) {
        currentPage = pagesCount
      }

      let offset = currentPage * 5 - 5
      const arr = (): number[] => {
        return [...Array(pagesCount).keys()].map((el) => el + offset)
      }
      const arrArr = arr()
      return questions.filter((item: QuestionInterface, i: number) =>
        arrArr.includes(i),
      )
    } else {
      return questions
    }
  }
}
