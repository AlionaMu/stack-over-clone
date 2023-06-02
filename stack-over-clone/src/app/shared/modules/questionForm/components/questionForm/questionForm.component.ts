import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {QuestionCategory} from 'src/app/shared/constants'
import {SetMapToArrayService} from 'src/app/shared/services/setMapToArray.service'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {QuestionInterface} from 'src/app/shared/types/question.interface'

@Component({
  selector: 'app-question-form',
  templateUrl: './questionForm.component.html',
  styleUrls: ['./questionForm.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: QuestionInterface | null =
    {} as QuestionInterface | null
  @Input('isSubmitting') isSubmittingProps: boolean | null = null
  @Input('errors') errorsProps: BackendErrorsInterface | null = null

  @Output('questionSubmit') questionSubmitEvent =
    new EventEmitter<QuestionInterface>()

  public form: FormGroup = {} as FormGroup
  public tags: string[] = Object.values(QuestionCategory)
  public tagsSet = new Map()

  constructor(private fb: FormBuilder, public service: SetMapToArrayService) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeTags()
  }

  initializeTags() {
    if (this.initialValuesProps) {
      this.initialValuesProps.tags?.forEach((item) => {
        this.tagsSet.set(item, true)
      })
    }
  }

  onCheckboxChange($event: Event) {
    const input = $event.target as HTMLInputElement
    this.tagsSet.set(input.value, !this.tagsSet.get(input.value))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps?.title,
      body: this.initialValuesProps?.body,
      tags: [this.initialValuesProps?.tags],
    })
  }

  onSubmit(): void {
    this.form.value.tags = this.service.setMapToArray(this.tagsSet)
    this.form.value.slug = this.initialValuesProps?.slug
    this.form.value.date = this.initialValuesProps?.date
    this.form.value.isAnswered = false
    this.questionSubmitEvent.emit(this.form.value)
  }
}
