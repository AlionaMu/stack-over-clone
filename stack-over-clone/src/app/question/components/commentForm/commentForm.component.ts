import {getCurrentUserAction} from './../../../auth/store/actions/getCurrentUser.action'
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {QuestionCategory} from 'src/app/shared/constants'

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {CommentInterface} from 'src/app/shared/types/comment.interface'
import {QuestionInterface} from 'src/app/shared/types/question.interface'
import {QuestionInputInterface} from 'src/app/shared/types/questionInput.interface'
import {updateQuestionAction} from '../../store/actions/updateQuestion.action'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

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
  public currentUser: CurrentUserInterface = {} as CurrentUserInterface

  constructor(private fb: FormBuilder, public store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.store
      .pipe(select(currentUserSelector))
      .subscribe((userProfile: CurrentUserInterface | null) => {
        if (userProfile) {
          this.currentUser = userProfile
        }
      })
  }

  initializeForm(): void {
    this.form = this.fb.group({
      author: '',
      body: '',
      date: '',
      isRightAnswer: false,
    })
  }

  onSubmit(): void {
    this.form.value.date = Date.now()
    this.form.value.author = this.currentUser.user.name
    this.commentSubmitEvent.emit(this.form.value)
  }
}
