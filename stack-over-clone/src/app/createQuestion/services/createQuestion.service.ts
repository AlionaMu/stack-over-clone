import {map} from 'rxjs/operators'
import {SaveQuestionResponseInterface} from './../../shared/types/saveQuestionResponse.interface'
import {environment} from '../../../environments/environment'
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import {QuestionInterface} from './../../shared/types/question.interface'
import {QuestionInputInterface} from './../../shared/types/questionInput.interface'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CreateQuestionService {
  constructor(private firestore: AngularFirestore) {}

  createQuestion(
    questionInput: QuestionInputInterface
  ) {
    console.log(questionInput)
    // questionInput.title = this.firestore.createId()
    // return this.firestore.collection('/questions').add(questionInput);
    return this.firestore.collection('questions').add(questionInput);
  }

  getAllQuestions() {
    return this.firestore.collection('/questions').snapshotChanges();
  }
}
