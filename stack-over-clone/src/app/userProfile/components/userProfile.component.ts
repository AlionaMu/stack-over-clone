import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {Observable, Subscription, combineLatest} from 'rxjs'
import {select, Store} from '@ngrx/store'

import {
  isLoadingSelector,
  errorSelector,
  userProfileSelector,
} from './../store/selectors'
import {UserProfileInterface} from '../types/userProfile.interface'
import {getUserProfileAction} from '../store/actions/getUserProfile.action'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {filter, map} from 'rxjs/operators'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public userProfile: CurrentUserInterface = {} as CurrentUserInterface
  public isLoading$: Observable<boolean> = {} as Observable<boolean>
  publicerror$: Observable<string | null> = {} as Observable<string | null>
  public userProfileSubscription: Subscription = {} as Subscription
  public slug: string | null = ''
  public isCurrentUserProfile$: Observable<boolean> = {} as Observable<boolean>

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  initializeValues(): void {
    // this.slug = this.route.snapshot.paramMap.get('slug')
    // this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // this.error$ = this.store.pipe(select(errorSelector));
    // this.isCurrentUserProfile$ = combineLatest([
    //   this.store.pipe(select(currentUserSelector), filter(Boolean)),
    // this.store.pipe(select(userProfileSelector), filter(Boolean)),
    // ]).pipe(
    //   map(
    //     ([currentUser, userProfile]: [
    //       CurrentUserInterface,
    //       UserProfileInterface
    //     ]) => {
    //       return currentUser.username === userProfile.username;
    //     }
    //   )
    // );
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(currentUserSelector))
      .subscribe((userProfile: any) => {
        console.log(userProfile)
        this.userProfile = userProfile
      })

    console.log(this.userProfileSubscription)

    // this.route.params.subscribe((params: Params) => {
    //   this.slug = params['slug']
    //   this.fetchUserProfile()
    // })
  }

  fetchUserProfile(): void {
    if (this.slug) this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }
}
