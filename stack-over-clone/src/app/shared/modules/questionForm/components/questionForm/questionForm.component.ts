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

  constructor(private fb: FormBuilder) {
    // if (this.initialValuesProps.tags?.length) {
    //   console.log("TRUE")
    //   this.initialValuesProps.tags?.forEach((item) => {
    //     this.tagsSet.set(item, true)
    //   })
    // } else  {
    //   this.tags.forEach((item) => {
    //   this.tagsSet.set(item, false)
    // })
    // }
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  onCheckboxChange($event: any) {
    this.tagsSet.set(
      $event.target.value,
      !this.tagsSet.get($event.target.value),
    )
    console.log(Array.from(this.tagsSet.keys()))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      body: this.initialValuesProps.body,
      tags: [this.initialValuesProps.tags],
    })
  }

  onSubmit(): void {
    this.form.value.tags = Array.from(this.tagsSet.keys())
    this.form.value.slug = this.initialValuesProps.slug
    this.form.value.date = this.initialValuesProps.date
    this.form.value.isAnswered = false
    this.questionSubmitEvent.emit(this.form.value)
  }

  selectionChange($event: any) {
    this.tagsSet.set(
      $event.source.value,
      !this.tagsSet.get($event.source.value),
    )
  }
}
