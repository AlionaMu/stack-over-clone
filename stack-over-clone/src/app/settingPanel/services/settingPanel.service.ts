import {Injectable} from '@angular/core'
import {QuestionInputInterface} from './../../shared/types/questionInput.interface'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {Store} from '@ngrx/store'

@Injectable({
  providedIn: 'root',
})
export class SettingPanelService {
  constructor(private firestore: AngularFirestore, public store: Store) {}

  setMapToArray(map: Map<any, any>) {
    const arrValues = Array.from(map.values())
    const arrKeys = Array.from(map.keys())
    return arrKeys.filter(
      (item: string, index: number) => arrValues[index] === true,
    )
  }

  createQuestion(questionInput: QuestionInputInterface) {
    return this.firestore
      .collection('questions')
      .doc(questionInput.slug)
      .set(questionInput)
  }
}
