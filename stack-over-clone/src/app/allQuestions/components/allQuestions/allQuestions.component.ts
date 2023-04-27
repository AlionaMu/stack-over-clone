import {UtilsService} from 'src/app/shared/services/utils.service'
import {SettingsService} from './../../../shared/services/settings.service'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {getAllQuestionsAction} from '../../store/actions/getAllQuestions.action'
import {allQuestionsSelector} from './../../store/selectors'
import {
  currentUserSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors'
import {ActivatedRoute, Params} from '@angular/router'
import {AllQuestionsService} from '../../services/allQuestions.service'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'app-all-questions',
  templateUrl: './allQuestions.component.html',
  styleUrls: ['./allQuestions.component.scss'],
})
export class AllQuestionsComponent implements OnInit, OnDestroy {
  public allQuestions$: Observable<any | null> = {} as Observable<any | null>
  public error$: Observable<string | null> = {} as Observable<string | null>
  public isLoading$: Observable<boolean> = {} as Observable<boolean>
  public isLoggedIn$: Observable<boolean> = {} as Observable<boolean>
  public isLoggedIn: boolean = false

  public userProfileSubscription: Subscription = {} as Subscription
  public userProfile: CurrentUserInterface | null = null

  public queryParamsSubscription: Subscription = {} as Subscription

  constructor(
    private store: Store,
    public settingsService: SettingsService,
    private route: ActivatedRoute,
    public service: AllQuestionsService,
    public utilsService: UtilsService,
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchAllQuestions()
    this.initializeListeners()
  }

  initializeListeners(): void {
    ;(this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.settingsService.setCurrentPageInfo(Number(params['page'] || '1'))
      },
    )),
      (this.userProfileSubscription = this.store
        .pipe(select(currentUserSelector))
        .subscribe((userProfile: any) => {
          if (userProfile) {
            this.userProfile = userProfile.user
          }
        }))
  }

  initializeValues(): void {
    this.allQuestions$ = this.store.pipe(select(allQuestionsSelector))
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.settingsService.pageInfo.pagesCount = 1
  }

  fetchAllQuestions(): void {
    this.store.dispatch(getAllQuestionsAction({value: 'questions'}))
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
    this.userProfileSubscription.unsubscribe()
  }
}
