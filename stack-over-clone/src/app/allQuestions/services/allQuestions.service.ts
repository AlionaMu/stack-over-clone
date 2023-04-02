import {Injectable} from '@angular/core'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {Store} from '@ngrx/store'

@Injectable({
  providedIn: 'root',
})
export class AllQuestionsService {
  constructor(private firestore: AngularFirestore, public store: Store) {}

  getAllQuestions(value:string) {
    return this.firestore.collection(value).valueChanges()
  }
}
