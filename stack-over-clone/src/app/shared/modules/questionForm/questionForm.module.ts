import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ReactiveFormsModule} from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatListModule} from '@angular/material/list'

import {QuestionFormComponent} from './components/questionForm/questionForm.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
  ],
  declarations: [QuestionFormComponent],
  exports: [QuestionFormComponent],
})
export class QuestionFormModule {}
