import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {BackendErrorMessageComponent} from 'src/app/shared/modules/backendErrorMessage/components/BackendErrorMessage/backendErrorMessage.component'
@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessageComponent],
  exports: [BackendErrorMessageComponent],
})
export class BackendErrorMessagesModule {}
