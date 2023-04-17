import {SettingsService} from './../../../shared/services/settings.service'
import {Component} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {getAllQuestionsAction} from '../../store/actions/getAllQuestions.action'
import {
  allQuestionsSelector,
  errorSelector,
  isLoadingSelector,
} from './../../store/selectors'
import {isLoggedInSelector} from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-all-questions',
  templateUrl: './allQuestions.component.html',
  styleUrls: ['./allQuestions.component.scss'],
})
export class AllQuestionsComponent {
  allQuestions$: Observable<any | null> = {} as Observable<any | null>
  error$: Observable<string | null> = {} as Observable<string | null>
  isLoading$: Observable<boolean> = {} as Observable<boolean>
  isLoggedIn$: Observable<boolean> = {} as Observable<boolean>
  isLoggedIn: boolean = false

  constructor(private store: Store, public settingsService: SettingsService) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchAllQuestions()
  }

  initializeValues(): void {
    this.allQuestions$ = this.store.pipe(select(allQuestionsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }

  fetchAllQuestions(): void {
    this.store.dispatch(getAllQuestionsAction({value: 'questions'}))
  }
}
