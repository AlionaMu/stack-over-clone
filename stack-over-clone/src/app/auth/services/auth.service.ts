import {currentUserSelector} from './../store/selectors'
import {GetRandomIdService} from './../../shared/services/getRandomId.service'
import {AuthResponseInterface} from './../types/authResponse.interface'
import {Injectable} from '@angular/core'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {Observable} from 'rxjs'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {doc, getDoc, getFirestore} from '@angular/fire/firestore'
import {select, Store} from '@ngrx/store'

@Injectable()
export class AuthService {
  public db = getFirestore()

  constructor(
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public service: GetRandomIdService,
    public store: Store,
  ) {}

  getById(id: string): Observable<unknown> {
    return this.firestore.doc('users/' + id).get()
  }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: CurrentUserInterface): Promise<void> {
    return this.firestore.collection('users').doc(data.email).set(data)
  }

  async login(data: CurrentUserInterface) {
    const docRef = doc(this.db, 'users', data.email)
    const docSnap = await getDoc(docRef)
    return docSnap.data() as CurrentUserInterface
  }

  getCurrentUser(): Observable<CurrentUserInterface | null> {
    return this.store.pipe(select(currentUserSelector))
  }
}
