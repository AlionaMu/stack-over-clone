import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root',
})
export class AllQuestionsService {
  constructor(private firestore: AngularFirestore) {}

  getAllQuestions(value: string) {
    return this.firestore.collection(value).valueChanges()
  }
}
