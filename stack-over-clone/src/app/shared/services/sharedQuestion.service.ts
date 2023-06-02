import {Injectable} from '@angular/core'
import {doc, getDoc} from 'firebase/firestore'
import {getFirestore} from '@angular/fire/firestore'
import {QuestionInterface} from '../types/question.interface'

@Injectable()
export class SharedQuestionService {
  public db = getFirestore()
  constructor() {}

  async getQuestion(slug: string) {
    const docRef = doc(this.db, 'questions', slug)
    const docSnap = await getDoc(docRef)
    return docSnap.data() as QuestionInterface
  }
}
