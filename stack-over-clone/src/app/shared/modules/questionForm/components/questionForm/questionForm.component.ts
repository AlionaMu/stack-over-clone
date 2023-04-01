import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {QuestionCategory} from 'src/app/shared/constants'

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
  public tags: string[] = Object.values(QuestionCategory)
  public tagsSet = new Map()
  public selected: any

  constructor(private fb: FormBuilder) {
    this.tags.forEach((item) => {
      this.tagsSet.set(item, false)
    })
  }

  ngOnInit(): void {
    this.initializeForm()
    console.log(this.tags)
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      body: this.initialValuesProps.body,
      tags: this.initialValuesProps.tags,
    })
  }

  onSubmit(): void {
    this.questionSubmitEvent.emit(this.form.value)
    // console.log(this.form.get('selectedTag')?.value);
  }

  selectionChange($event: any) {
    this.tagsSet.set(
      $event.option.value,
      !this.tagsSet.get($event.option.value),
    )
  }
}
