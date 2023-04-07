import {map} from 'rxjs/operators'
import {SaveQuestionResponseInterface} from '../types/saveQuestionResponse.interface'
import {environment} from '../../../environments/environment'
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {from, Observable} from 'rxjs'

import {QuestionInterface} from '../types/question.interface'
import {QuestionInputInterface} from '../types/questionInput.interface'
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable()
export class EditQuestionService {
  constructor(private firestore: AngularFirestore) {}

  updateQuestion(questionInput: any) {  //QuestionInputInterface
    console.log(questionInput)
    return from(this.firestore
      .collection('questions')
      .doc(questionInput.slug)
      .update(questionInput))
  }
}
