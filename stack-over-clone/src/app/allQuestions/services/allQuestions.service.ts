import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Injectable({
  providedIn: 'root',
})
export class AllQuestionsService {
  constructor(private firestore: AngularFirestore) {}

  getAllQuestions(value: string) {
    const res = this.firestore
      .collection(value)
      .valueChanges() as unknown as QuestionInterface[]
    return res
  }
}
