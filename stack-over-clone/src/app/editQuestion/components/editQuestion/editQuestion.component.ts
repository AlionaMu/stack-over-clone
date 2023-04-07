import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'
import {filter, map} from 'rxjs/operators'

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
// import { QuestionInputInterface } from 'src/app/shared/types/questionInput.interface';
import {QuestionInterface} from 'src/app/shared/types/question.interface'
import {getQuestionAction} from 'src/app/editQuestion/store/actions/getQuestion.action'
import {updateQuestionAction} from 'src/app/editQuestion/store/actions/updateQuestion.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
  isLoadingSelector,
  questionSelector,
} from 'src/app/editQuestion/store/selectors'
import { QuestionInputInterface } from 'src/app/shared/types/questionInput.interface'

type NewType = QuestionInputInterface

@Component({
  selector: 'app-edit-question',
  templateUrl: './editQuestion.component.html',
  styleUrls: ['./editQuestion.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  // initialValues$: Observable<QuestionInputInterface> = {} as Observable<QuestionInputInterface>;
  // isSubmitting$: Observable<boolean> = {} as Observable<boolean>;
  // isLoading$: Observable<boolean> = {} as Observable<boolean>;
  // backendErrors$: Observable<BackendErrorsInterface | null> = {} as Observable<BackendErrorsInterface | null>;
  // slug: string | null = null;

  public initialValues$: Observable<any> = {} as Observable<any> // QuestionInputInterface
  public isSubmitting$: Observable<boolean | null> = {} as Observable<
    boolean | null
  >
  public isLoading$: Observable<boolean> = {} as Observable<boolean>
  public backendErrors$: Observable<BackendErrorsInterface | null> =
    {} as Observable<BackendErrorsInterface | null>
  public slug: string | null = ''

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(questionSelector),
      filter(Boolean),
      map((question: QuestionInterface) => {
        console.log('MAP', question)
        return {
          title: question.title,
          slug: question.slug,
          body: question.body,
          tags: question.tags,
          date: question.date,
          comments: question.comments
        }
      }),
    )
  }

  fetchData(): void {
    console.log(this.slug)
    if (this.slug) this.store.dispatch(getQuestionAction({slug: this.slug}))
  }

  onSubmit(questionInput: any): void {
    if (this.slug) this.store.dispatch(updateQuestionAction({questionInput}))
  }
}
