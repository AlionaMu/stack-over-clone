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
  public theme: string = 'night'

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
}
