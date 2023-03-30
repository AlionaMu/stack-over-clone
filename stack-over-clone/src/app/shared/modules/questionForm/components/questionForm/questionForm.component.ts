import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {QuestionInputInterface} from '../../../../types/questionInput.interface'

@Component({
  selector: 'app-question-form',
  templateUrl: './questionForm.component.html',
  styleUrls: ['./questionForm.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: QuestionInputInterface =
    {} as QuestionInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean | null = null
  @Input('errors') errorsProps: BackendErrorsInterface | null = null

  @Output('questionSubmit') questionSubmitEvent =
    new EventEmitter<QuestionInputInterface>()

  public form: FormGroup = {} as FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
    })
  }

  onSubmit(): void {
    this.questionSubmitEvent.emit(this.form.value)
  }
}
