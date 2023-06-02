import {AngularFirestore} from '@angular/fire/compat/firestore'
import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {
  validationErrorsSelector,
  isSubmittingSelector,
} from './../../store/selectors'

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {createQuestionAction} from '../../store/actions/createQuestion.action'
import {QuestionInterface} from 'src/app/shared/types/question.interface'
import {CreateQuestionService} from '../../services/createQuestion.service'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'app-create-question',
  templateUrl: './createQuestion.component.html',
  styleUrls: ['./createQuestion.component.scss'],
})
export class CreateQuestionComponent implements OnInit {
  initialValues: QuestionInterface = {
    title: '',
    body: '',
    tags: [],
    date: 0,
    slug: '',
    comments: [],
    isAnswered: false,
    author: null,
    approved: false,
  }

  public isSubmitting$: Observable<boolean | null> = {} as Observable<boolean>
  public backendErrors$: Observable<BackendErrorsInterface | null> =
    {} as Observable<BackendErrorsInterface | null>
  public currentUser$: Observable<CurrentUserInterface | null> =
    {} as Observable<CurrentUserInterface>
  public currentUser: CurrentUserInterface = {} as CurrentUserInterface

  constructor(
    private store: Store,
    public service: CreateQuestionService,
    public firestore: AngularFirestore,
  ) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.store
      .pipe(select(currentUserSelector))
      .subscribe((userProfile: CurrentUserInterface | null) => {
        if (userProfile) {
          this.currentUser = userProfile
        }
      })
  }

  onSubmit(questionInput: QuestionInterface) {
    questionInput.slug = this.firestore.createId()
    questionInput.date = Date.now()
    questionInput.comments = []
    questionInput.author = this.currentUser
    questionInput.approved = false
    this.store.dispatch(createQuestionAction({questionInput}))
  }
}
