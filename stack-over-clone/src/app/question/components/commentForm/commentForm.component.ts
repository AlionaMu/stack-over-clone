import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {QuestionCategory} from 'src/app/shared/constants'

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {QuestionInputInterface} from 'src/app/shared/types/questionInput.interface'

@Component({
  selector: 'app-comment-form',
  templateUrl: './commentForm.component.html',
  styleUrls: ['./commentForm.component.scss'],
})
export class CommentFormComponent implements OnInit {
  // @Input('initialValues') initialValuesProps: QuestionInputInterface =
  //   {} as QuestionInputInterface
  // @Input('isSubmitting') isSubmittingProps: boolean | null = null
  // @Input('errors') errorsProps: BackendErrorsInterface | null = null

  @Output('commentSubmit') commentSubmitEvent =
    new EventEmitter<QuestionInputInterface>()

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
    })
  }

  onSubmit(): void {
    ;(this.form.value.date = Date.now()),
      this.commentSubmitEvent.emit(this.form.value)
  }
}
