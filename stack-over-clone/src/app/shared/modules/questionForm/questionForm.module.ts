import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

// import { BackendErrorMessagesModule } from '../backendErrorMessages/backendErrorMessages.module';
import {ReactiveFormsModule} from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatListModule} from '@angular/material/list'

import {QuestionFormComponent} from './components/questionForm/questionForm.component'
import {MatListOptionFixDirective} from './directives/MatListOptionFix.directive'

@NgModule({
  imports: [
    CommonModule,
    // BackendErrorMessagesModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    // MatListOptionFixDirective,
  ],
  declarations: [QuestionFormComponent],
  exports: [QuestionFormComponent],
})
export class QuestionFormModule {}
