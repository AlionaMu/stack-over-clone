import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { Store } from '@ngrx/store'
import {QuestionCategory} from 'src/app/shared/constants'

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import { QuestionInterface } from 'src/app/shared/types/question.interface'
import {QuestionInputInterface} from 'src/app/shared/types/questionInput.interface'
import { updateQuestionAction } from '../../store/actions/updateQuestion.action'

@Component({
  selector: 'app-comment-form',
  templateUrl: './commentForm.component.html',
  styleUrls: ['./commentForm.component.scss'],
})
export class CommentFormComponent implements OnInit {
  // @Input('initialValues') initialValuesProps: QuestionInputInterface =
  //   {} as QuestionInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean | null = null
  // @Input('errors') errorsProps: BackendErrorsInterface | null = null

  @Output('commentSubmit') commentSubmitEvent =
    new EventEmitter<QuestionInputInterface>()
  @Input('question') questionValueProps: QuestionInterface | null = {} as  QuestionInterface | null
  public form: FormGroup = {} as FormGroup
  // public newQuestion: QuestionInterface = {} as QuestionInterface

  constructor(
    private fb: FormBuilder,
    private store: Store,
    ) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      // author: this.initialValuesProps.author,
      body: '',
      date: '',
    })
  }

  onSubmit(): void {
    this.form.value.date = Date.now(),

    this.commentSubmitEvent.emit(this.form.value)
  }
}
