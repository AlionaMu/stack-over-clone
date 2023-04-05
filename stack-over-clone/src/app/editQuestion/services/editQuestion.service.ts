import {map} from 'rxjs/operators'
import {SaveQuestionResponseInterface} from './../../shared/types/saveQuestionResponse.interface'
import {environment} from './../../../environments/environment'
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import {QuestionInterface} from './../../shared/types/question.interface'
import {QuestionInputInterface} from './../../shared/types/questionInput.interface'
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable()
export class EditQuestionService {
  constructor(private firestore: AngularFirestore) {}

  updateQuestion(questionInput: QuestionInputInterface) {
    console.log(questionInput)
    return this.firestore
      .collection('questions')
      .doc(questionInput.slug)
      .update(questionInput)
  }
}
