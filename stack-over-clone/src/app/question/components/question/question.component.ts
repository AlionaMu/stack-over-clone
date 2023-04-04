import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {combineLatest, Observable, Subscription} from 'rxjs'
import {map} from 'rxjs/operators'

import {currentUserSelector} from 'src/app/auth/store/selectors'
import {getQuestionAction} from '../../store/actions/getQuestion.action'
import {deleteQuestionAction} from '../../store/actions/deleteQuestion.action'
import {QuestionInterface} from 'src/app/shared/types/question.interface'
import {CurrentUserInterface} from './../../../shared/types/currentUser.interface'
import {
  questionSelector,
  isLoadingSelector,
  errorSelector,
} from './../../store/selectors'

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

  constructor(private store: Store, private route: ActivatedRoute) {}

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
    console.log(this.slug)
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
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

  fetchData(): void {
    if (this.slug) this.store.dispatch(getQuestionAction({slug: this.slug}))
  }

  deleteQuestion(): void {
    if (this.slug) this.store.dispatch(deleteQuestionAction({slug: this.slug}))
  }
}
