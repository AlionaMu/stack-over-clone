import {Injectable} from '@angular/core'
import {QuestionInputInterface} from './../../shared/types/questionInput.interface'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {Store} from '@ngrx/store'

@Injectable({
  providedIn: 'root',
})
export class CreateQuestionService {
  constructor(private firestore: AngularFirestore, public store: Store) {}

  createQuestion(questionInput: QuestionInputInterface) {
    console.log(questionInput)
    return this.firestore
      .collection('questions')
      .doc(questionInput.slug)
      .set(questionInput)
  }
}
