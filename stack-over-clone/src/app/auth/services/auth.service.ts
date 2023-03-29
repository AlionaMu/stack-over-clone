import {AuthResponseInterface} from './../types/authResponse.interface'
import {RegisterRequestInterface} from './../types/registerRequest.interface'
import {Injectable} from '@angular/core'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {map, Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {LoginRequestInterface} from '../types/loginRequest.interface'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {Router} from '@angular/router'

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface) {
    return this.afAuth
      .createUserWithEmailAndPassword(data.user.email, data.user.password)
      .then((result) => {
        console.log('SUCCESS', result)
      })
      .catch((error) => {
        window.alert(error.message)
      })
  }
}
