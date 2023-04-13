import {Injectable} from '@angular/core'
import {from} from 'rxjs'
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable()
export class EditQuestionService {
  constructor(private firestore: AngularFirestore) {}

  updateQuestion(questionInput: any) {
    return from(
      this.firestore
        .collection('questions')
        .doc(questionInput.slug)
        .update(questionInput),
    )
  }
}
