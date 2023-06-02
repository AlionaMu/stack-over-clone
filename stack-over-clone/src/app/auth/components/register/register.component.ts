import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {GetRandomIdService} from 'src/app/shared/services/getRandomId.service'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {registerAction} from '../../store/actions/register.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

const MIN_LENGTH = 8

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

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    public service: GetRandomIdService,
  ) {}

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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(MIN_LENGTH)]],
      isAdmin: [false, Validators.required],
    })
  }

  handleSubmit(): void {
    const id = this.service.getId(this.form.value.name)
    const newUser = Object.assign({}, this.form.value, {id: id})
    const request: CurrentUserInterface = newUser
    this.store.dispatch(registerAction({request}))
  }
}
