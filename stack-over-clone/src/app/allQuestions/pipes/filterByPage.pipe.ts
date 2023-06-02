import {environment} from 'src/environments/environment'
import {UtilsService} from 'src/app/shared/services/utils.service'
import {SettingsService} from 'src/app/shared/services/settings.service'
import {Pipe, PipeTransform} from '@angular/core'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Pipe({
  name: 'filterByPage',
})
export class FilterByPagePipe implements PipeTransform {
  constructor(
    public service: SettingsService,
    public utilsService: UtilsService,
  ) {}
  public transform(
    questions: QuestionInterface[],
    currentPage: number,
  ): QuestionInterface[] {
    const limit = environment.limit
    let pagesCount: number = 0
    if (questions?.length) {
      pagesCount = this.utilsService.getPagesCount(questions.length)
      this.service.setPageInfo(pagesCount)
      this.service.pageInfo.pagesCount = pagesCount
    }
    if (currentPage && questions) {
      if (currentPage < 1) {
        currentPage = 1
      }
      if (currentPage > pagesCount) {
        currentPage = pagesCount
      }

      let offset = currentPage * 5 - 5
      const arr = (): number[] => {
        return [...Array(limit).keys()].map((el) => el + offset)
      }
      const arrArr = arr()
      return questions.filter((item: QuestionInterface, i: number) => {
        return arrArr.includes(i)
      })
    } else {
      return questions
    }
  }
}
