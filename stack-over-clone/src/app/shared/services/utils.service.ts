import {Injectable} from '@angular/core'
import {environment} from 'src/environments/environment'

@Injectable()
export class UtilsService {
  public limit = environment.limit

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start)
  }

  getPagesCount(total: number): number {
    return Math.ceil(total / this.limit)
  }
}
