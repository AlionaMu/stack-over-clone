import {Component, OnDestroy, OnInit} from '@angular/core'
import {Subscription} from 'rxjs'
import {select, Store} from '@ngrx/store'

import {currentUserSelector} from 'src/app/auth/store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public userProfile: CurrentUserInterface = {} as CurrentUserInterface
  public userProfileSubscription: Subscription = {} as Subscription

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeListeners()
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(currentUserSelector))
      .subscribe((userProfile: CurrentUserInterface | null) => {
        if (userProfile) {
          this.userProfile = userProfile
        }
      })
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
  }
}
