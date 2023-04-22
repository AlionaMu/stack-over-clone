import {PageInterface} from './../../types/page.interface'
import {SettingsService} from './../../../shared/services/settings.service'
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {getAllQuestionsAction} from '../../store/actions/getAllQuestions.action'
import {allQuestionsSelector} from './../../store/selectors'
import {isLoggedInSelector} from 'src/app/auth/store/selectors'
import {environment} from 'src/environments/environment'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {AllQuestionsService} from '../../services/allQuestions.service'

export interface PaginationInfoInterface {
  currentPage: number
  pagesCount: number
}

@Component({
  selector: 'app-all-questions',
  templateUrl: './allQuestions.component.html',
  styleUrls: ['./allQuestions.component.scss'],
})
export class AllQuestionsComponent implements OnInit, OnDestroy {
  @Input('getPages') getPages: number = {} as number

  allQuestions$: Observable<any | null> = {} as Observable<any | null>
  error$: Observable<string | null> = {} as Observable<string | null>
  isLoading$: Observable<boolean> = {} as Observable<boolean>
  isLoggedIn$: Observable<boolean> = {} as Observable<boolean>
  isLoggedIn: boolean = false

  // page: PageInterface[] = {} as PageInterface[]
  paginationInfo: PaginationInfoInterface = {} as PaginationInfoInterface

  // apiUrlProps: string = ''

  // limit = environment.limit
  // baseUrl: string = ''
  queryParamsSubscription: Subscription = {} as Subscription
  currentPage: number = 1

  questionCount: any = 0

  constructor(
    private store: Store,
    public settingsService: SettingsService,
    private route: ActivatedRoute,
    public service: AllQuestionsService,
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchAllQuestions()
    this.initializeListeners()
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        // this.paginationInfo.currentPage = Number(params['page'] || '1');
        // this.paginationInfo.pagesCount = this.getPages
        // console.log(this.paginationInfo.currentPage)
        // console.log(this.paginationInfo.pagesCount)
        // const num = Number(params['page'] || '1')

        // this.settingsService.setPageInfo(this.getPages)
        this.settingsService.setCurrentPageInfo(Number(params['page'] || '1'))
        console.log(this.settingsService.pageInfo)
        // this.fetchAllQuestions();
      },
    )
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.allQuestions$ = this.store.pipe(select(allQuestionsSelector))
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }

  fetchAllQuestions(): void {
    this.store.dispatch(getAllQuestionsAction({value: 'questions'}))
  }
}
