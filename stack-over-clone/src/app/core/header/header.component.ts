import {logoutAction} from './../../auth/store/actions/logout.action'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {SettingsService} from 'src/app/shared/services/settings.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLoggedIn$: Observable<boolean> = {} as Observable<boolean>
  public isAnonymous$: Observable<boolean> = {} as Observable<boolean>
  public currentUser$: Observable<CurrentUserInterface | null> =
    {} as Observable<CurrentUserInterface>
  public userProfileSubscription: Subscription = {} as Subscription
  public userProfile: CurrentUserInterface = {} as CurrentUserInterface

  constructor(private store: Store, public settingsService: SettingsService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
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

  logout() {
    this.store.dispatch(logoutAction())
    this.unsetFilters()
  }

  unsetFilters(): void {
    this.settingsService.setFilterByAuthor('')
    this.settingsService.setFilterByNotApproved(true)
  }

  filterByAuthor(value: string): void {
    this.settingsService.setFilterByAuthor(value)
    this.settingsService.setFilterByNotApproved(true)
  }

  filterByNotApproved(): void {
    this.settingsService.setFilterByAuthor('')
    this.settingsService.setFilterByNotApproved(false)
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
  }
}
