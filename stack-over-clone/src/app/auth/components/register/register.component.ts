import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {registerAction} from '../../store/actions/register.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      email: ['', Validators.required],
      password: ['', Validators.required],
      isAdmin: ['', Validators.required],
    })
  }

  handleSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    console.log(request)
    this.store.dispatch(registerAction({request}))
  }
}
