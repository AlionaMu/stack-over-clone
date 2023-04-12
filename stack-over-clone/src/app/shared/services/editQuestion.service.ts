import {Injectable} from '@angular/core'
import {from, map} from 'rxjs'

import {QuestionInterface} from '../types/question.interface'
import {QuestionInputInterface} from '../types/questionInput.interface'
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable()
export class EditQuestionService {
  constructor(private firestore: AngularFirestore) {}

  updateQuestion(questionInput: any) {
    //QuestionInputInterface
    return from(
      this.firestore
        .collection('questions')
        .doc(questionInput.slug)
        .update(questionInput),
    )
    // .pipe(
    //   map((response: any) => {
    //     return response;
    //   })
    // );
  }
}
