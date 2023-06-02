import {Injectable} from '@angular/core'
import {from} from 'rxjs'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {QuestionInterface} from '../types/question.interface'

@Injectable()
export class EditQuestionService {
  constructor(private firestore: AngularFirestore) {}

  updateQuestion(questionInput: QuestionInterface) {
    return from(
      this.firestore
        .collection('questions')
        .doc(questionInput.slug)
        .update(questionInput),
    )
  }
}
