import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {
  validationErrorsSelector,
  isSubmittingSelector,
} from './../../store/selectors'

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {createQuestionAction} from '../../store/actions/createQuestion.action'
import {async} from 'rxjs/internal/scheduler/async'
import {map} from 'rxjs/operators'
import {QuestionInputInterface} from 'src/app/shared/types/questionInput.interface'

@Component({
  selector: 'app-create-question',
  templateUrl: './createQuestion.component.html',
  styleUrls: ['./createQuestion.component.scss'],
})
export class CreateQuestionComponent implements OnInit {
  initialValues: QuestionInputInterface = {
    title: '',
    body: '',
    tags: []
  }

  public isSubmitting$: Observable<boolean | null> = {} as Observable<boolean>
  public backendErrors$: Observable<BackendErrorsInterface | null> =
    {} as Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(questionInput: QuestionInputInterface) {
    this.store.dispatch(createQuestionAction({questionInput}))
  }
}
