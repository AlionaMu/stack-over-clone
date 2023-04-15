import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ReactiveFormsModule} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select'
import {MatListModule} from '@angular/material/list'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox'

import {QuestionFormComponent} from './components/questionForm/questionForm.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [QuestionFormComponent],
  exports: [QuestionFormComponent],
})
export class QuestionFormModule {}
