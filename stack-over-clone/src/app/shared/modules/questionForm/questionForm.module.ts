import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

// import { BackendErrorMessagesModule } from '../backendErrorMessages/backendErrorMessages.module';
import {ReactiveFormsModule} from '@angular/forms'

import {QuestionFormComponent} from './components/questionForm/questionForm.component'

@NgModule({
  imports: [
    CommonModule,
    // BackendErrorMessagesModule,
    ReactiveFormsModule,
  ],
  declarations: [QuestionFormComponent],
  exports: [QuestionFormComponent],
})
export class QuestionFormModule {}
