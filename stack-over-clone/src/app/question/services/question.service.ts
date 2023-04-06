import {Injectable} from '@angular/core'

@Injectable()
export class QuestionService {
  public isOpenComment: boolean = false

  constructor() {}

  toggleComment(): void {
    this.isOpenComment = !this.isOpenComment
  }
}
