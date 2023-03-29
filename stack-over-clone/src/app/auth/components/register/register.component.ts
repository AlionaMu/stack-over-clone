import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Store } from '@ngrx/store'
import { registerAction } from '../../store/actions/register.action'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = {} as FormGroup

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {}

  initializeForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  handleSubmit(): void {
    console.log(this.form.value)
    this.store.dispatch(registerAction(this.form.value))
    console.log(this.store)
  }
}
