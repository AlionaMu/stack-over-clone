import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {loginAction} from '../../store/actions/login.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup = {} as FormGroup
  public isSubmitting$: Observable<boolean> = {} as Observable<boolean>
  public backendErrors$: Observable<BackendErrorsInterface | null> =
    {} as Observable<BackendErrorsInterface | null>

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  handleSubmit(): void {
    const request: CurrentUserInterface = this.form.value
    this.store.dispatch(loginAction({request}))
  }
}
