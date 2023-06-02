import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {CommentInterface} from 'src/app/shared/types/comment.interface'
import {QuestionInterface} from 'src/app/shared/types/question.interface'
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
    this.form.value.author = this.currentUser.name || null
    this.commentSubmitEvent.emit(this.form.value)
  }
}
