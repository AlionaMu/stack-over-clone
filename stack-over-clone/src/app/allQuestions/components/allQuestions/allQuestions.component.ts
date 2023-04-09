import {QuestionInterface} from 'src/app/shared/types/question.interface'
import {SettingsService} from './../../../shared/services/settings.service'
import {SharedQuestionService} from './../../../shared/services/sharedQuestion.service'
import {Component} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'
import {getAllQuestionsAction} from '../../store/actions/getAllQuestions.action'
import {GetAllQuestionsResponseInterface} from './../../types/getAllQuestionsResponse.interface'
import {
  allQuestionsSelector,
  errorSelector,
  isLoadingSelector,
} from './../../store/selectors'

@Component({
  selector: 'app-all-questions',
  templateUrl: './allQuestions.component.html',
  styleUrls: ['./allQuestions.component.scss'],
})
export class AllQuestionsComponent {
  allQuestions$: Observable<any | null> = {} as Observable<any | null>
  error$: Observable<string | null> = {} as Observable<string | null>
  isLoading$: Observable<boolean> = {} as Observable<boolean>

  constructor(private store: Store, public settingsService: SettingsService) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchAllQuestions()
  }

  initializeValues(): void {
    this.allQuestions$ = this.store.pipe(select(allQuestionsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  fetchAllQuestions(): void {
    this.store.dispatch(getAllQuestionsAction({value: 'questions'}))
  }
}
