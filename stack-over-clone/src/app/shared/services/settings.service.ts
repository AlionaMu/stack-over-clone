import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public isAnswered: boolean | null = null
  public selectedTag: string | null = null

  setAnswered(value: boolean | null) {
    this.isAnswered = value
  }
}
