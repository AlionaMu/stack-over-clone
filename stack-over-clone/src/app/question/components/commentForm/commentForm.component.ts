import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {Store} from '@ngrx/store'
import {QuestionCategory} from 'src/app/shared/constants'

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {CommentInterface} from 'src/app/shared/types/comment.interface'
import {QuestionInterface} from 'src/app/shared/types/question.interface'
import {QuestionInputInterface} from 'src/app/shared/types/questionInput.interface'
import {updateQuestionAction} from '../../store/actions/updateQuestion.action'

@Component({
  selector: 'app-comment-form',
  templateUrl: './commentForm.component.html',
  styleUrls: ['./commentForm.component.scss'],
})
export class CommentFormComponent implements OnInit {
  @Input('isSubmitting') isSubmittingProps: boolean | null = null
  @Input('question') questionValueProps: QuestionInterface | null =
    {} as QuestionInterface | null
  @Output('commentSubmit') commentSubmitEvent =
    new EventEmitter<CommentInterface>()

  public form: FormGroup = {} as FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      // author: this.initialValuesProps.author,
      body: '',
      date: '',
      isRightAnswer: false,
    })
  }

  onSubmit(): void {
    this.form.value.date = Date.now()
    this.commentSubmitEvent.emit(this.form.value)
  }
}
