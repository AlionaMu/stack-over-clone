import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public isAnswered: boolean | null = null
  public selectedTag: string | null = null
  public filterByDate: string = ''
  public filterByTag: string = ''
  public sortByDate: string = ''
  public allQuestionsItemInfo: string =
    'all-questions__item-info all-questions__item-info_line'
  public allQuestionsItem: string =
    'all-questions__item all-questions__item_line'
  public allQuestions: string = 'all-questions'

  setAnswered(value: boolean | null) {
    this.isAnswered = value
  }

  setFilterByDate(value: string) {
    this.filterByDate = value
  }

  setFilterByTag(value: string) {
    this.filterByTag = value
  }

  setSortByDate(value: string) {
    this.sortByDate = value
  }

  setLayoutType(value: string) {
    this.allQuestionsItemInfo =
      value === 'line'
        ? 'all-questions__item-info all-questions__item-info_line'
        : 'all-questions__item-info all-questions__item-info_tile'

    this.allQuestionsItem =
      value === 'line'
        ? 'all-questions__item all-questions__item_line'
        : 'all-questions__item all-questions__item_tile'

    this.allQuestions =
      value === 'line' ? 'all-questions' : 'all-questions all-questions_tile'
  }
}
