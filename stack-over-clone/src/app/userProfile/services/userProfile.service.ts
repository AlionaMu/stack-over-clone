import {Injectable} from '@angular/core'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

import {environment} from './../../../environments/environment'
import {UserProfileInterface} from '../types/userProfile.interface'
import {GetUserProfileResponseInterface} from '../types/userProfileResponse.interface'

@Injectable()
export class UserProfileService {
  constructor() {}

  // getUserProfile(slug: string): Observable<UserProfileInterface> {

  //   return this.http
  //     .get(url)
  //     .pipe(
  //       map((response: GetUserProfileResponseInterface) => response.profile)
  //     );
  // }
}
