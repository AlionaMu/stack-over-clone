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
    // questionInput.title = this.firestore.createId()
    return this.firestore.collection('questions').add(questionInput)
  }

  getAllQuestions() {
    return this.firestore.collection('questions').valueChanges() // snapshotChanges();
  }
}
