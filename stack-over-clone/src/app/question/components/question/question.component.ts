import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {combineLatest, Observable, Subscription} from 'rxjs'
import {filter, map} from 'rxjs/operators'

import {currentUserSelector} from 'src/app/auth/store/selectors'
import {getQuestionAction} from '../../store/actions/getQuestion.action'
import {deleteQuestionAction} from '../../store/actions/deleteQuestion.action'
import {QuestionInterface} from 'src/app/shared/types/question.interface'
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface'
import {
  questionSelector,
  isLoadingSelector,
  errorSelector,
  isSubmittingSelector,
} from '../../store/selectors'

import {QuestionService} from 'src/app/question/services/question.service'
import {updateQuestionAction} from '../../store/actions/updateQuestion.action'
import {QuestionInputInterface} from 'src/app/shared/types/questionInput.interface'
import {ConvertDataService} from 'src/app/shared/services/convertData.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  public slug: string | null = ''
  public question: QuestionInterface | null = {} as QuestionInterface | null
  public questionSubscription: Subscription = {} as Subscription
  public isLoading$: Observable<boolean> = {} as Observable<boolean>
  public error$: Observable<string | null> = {} as Observable<string | null>
  public isAuthor$: Observable<boolean> = {} as Observable<boolean>

  public isSubmitting$: Observable<boolean | null> = {} as Observable<
    boolean | null
  >
  public question$: Observable<QuestionInputInterface> =
    {} as Observable<QuestionInputInterface>

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    public questionService: QuestionService,
    public convertService: ConvertDataService,
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.questionSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.question$ = this.store.pipe(
      select(questionSelector),
      filter(Boolean),
      map((question: QuestionInterface) => {
        console.log('initialValue', question)
        return {
          title: question.title,
          slug: question.slug,
          body: question.body,
          tags: question.tags,
          date: question.date,
          comments: question.comments,
        }
      }),
    )
  }

  initializeListeners(): void {
    console.log('listener')
    this.questionSubscription = this.store
      .pipe(select(questionSelector))
      .subscribe((question: QuestionInterface | null) => {
        console.log('question', question)
        this.question = question
        console.log('question', this.question)
      })
  }

  onSubmit(commentInput: any) {
    console.log(commentInput)

    const obj = this.convertService.convertObj(commentInput, this.question)

    console.log(obj)

    this.store.dispatch(updateQuestionAction(obj))
  }

  fetchData(): void {
    if (this.slug) this.store.dispatch(getQuestionAction({slug: this.slug}))
  }

  deleteQuestion(): void {
    if (this.slug) this.store.dispatch(deleteQuestionAction({slug: this.slug}))
  }

  toggleComment() {
    this.questionService.toggleComment()
  }
}
