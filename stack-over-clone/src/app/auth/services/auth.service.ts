import {UserProfileInterface} from './../../userProfile/types/userProfile.interface'
import {AuthResponseInterface} from './../types/authResponse.interface'
import {RegisterRequestInterface} from './../types/registerRequest.interface'
import {Injectable} from '@angular/core'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {LoginRequestInterface} from '../types/loginRequest.interface'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {CurrentUserInputInterface} from 'src/app/shared/types/currentUserInput.interface'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {
  distinctUntilChanged,
  EMPTY,
  map,
  Observable,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs'
import {Router} from '@angular/router'
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable()
export class AuthService {
  public readonly userId$: Observable<string> = {} as Observable<string>
  public readonly profile$: Observable<UserProfileInterface> =
    {} as Observable<UserProfileInterface>

  constructor(
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public fAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.userId$ = this.afAuth.authState.pipe(
      map((fbUser) => (fbUser ? fbUser.uid : null)),
      distinctUntilChanged(),
      tap((uid: any) => {
        console.log('AuthService: userId$', uid)
      }),
      shareReplay(1),
    )

    this.profile$ = this.userId$.pipe(
      switchMap((authId) => {
        if (authId) {
          return this.getById(authId)
        } else {
          return EMPTY
        }
      }),
      tap((profile) => {
        console.log('[AuthService] profile$', profile)
      }),
      shareReplay(1),
    )
  }

  getById(id: string): Observable<any> {
    return this.firestore.doc<any>('users/' + id).get()
  }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface) {
    return this.afAuth.createUserWithEmailAndPassword(
      data.user.email,
      data.user.password,
    )
  }

  login(data: LoginRequestInterface) {
    return this.afAuth.signInWithEmailAndPassword(
      data.user.email,
      data.user.password,
    )
  }

  logout() {
    this.afAuth.signOut()
  }

  getCurrentUser() {
    // return this.http.get(url).pipe(map(this.getUser));
    console.log(this.afAuth)
    return this.afAuth.currentUser
  }

  updateCurrentUser(data: CurrentUserInputInterface) {
    // const url = `${environment.apiUrl}/user`;
    // return this.http.put(url, data).pipe(map(this.getUser));
    // return this.afAuth.user.up
  }
}
