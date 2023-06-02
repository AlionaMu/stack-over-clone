import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable()
export class QuestionService {
  public isOpenComment: boolean = false

  constructor(private firestore: AngularFirestore) {}

  toggleComment(): void {
    this.isOpenComment = !this.isOpenComment
  }

  deleteQuestion(slug: string) {
    return this.firestore.collection('questions').doc(slug).delete()
  }
}
