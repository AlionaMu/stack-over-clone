import {currentUserSelector} from './../store/selectors'
import {GetRandomIdService} from './../../shared/services/getRandomId.service'
import {AuthResponseInterface} from './../types/authResponse.interface'
import {RegisterRequestInterface} from './../types/registerRequest.interface'
import {Injectable} from '@angular/core'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {LoginRequestInterface} from '../types/loginRequest.interface'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {Observable} from 'rxjs'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {doc, DocumentData, getDoc, getFirestore} from '@angular/fire/firestore'
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

  getById(id: string): Observable<any> {
    return this.firestore.doc<any>('users/' + id).get()
  }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Promise<void> {
    console.log(data)
    return this.firestore.collection('users').doc(data.user.email).set(data)
  }

  async login(data: LoginRequestInterface) {
    const docRef = doc(this.db, 'users', data.user.email)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  }

  getCurrentUser(): Observable<CurrentUserInterface | null> {
    return this.store.pipe(select(currentUserSelector))
  }
}
