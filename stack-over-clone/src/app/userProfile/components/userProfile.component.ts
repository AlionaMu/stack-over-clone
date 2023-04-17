import {Component, OnInit} from '@angular/core'
import {Subscription} from 'rxjs'
import {select, Store} from '@ngrx/store'

import {currentUserSelector} from 'src/app/auth/store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public userProfile: CurrentUserInterface = {} as CurrentUserInterface
  // public isLoading$: Observable<boolean> = {} as Observable<boolean>
  // public error$: Observable<string | null> = {} as Observable<string | null>
  public userProfileSubscription: Subscription = {} as Subscription
  // public slug: string | null = ''
  // public isCurrentUserProfile$: Observable<boolean> = {} as Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeListeners()
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(currentUserSelector))
      .subscribe((userProfile: any) => {
        this.userProfile = userProfile.user
      })
  }
}
