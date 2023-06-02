import {Component, OnInit, Input} from '@angular/core'
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface'

@Component({
  selector: 'app-backend-error-message',
  templateUrl: './backendErrorMessage.component.html',
  styleUrls: ['./backendErrorMessage.component.scss'],
})
export class BackendErrorMessageComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface | null =
    {} as BackendErrorsInterface | null

  ngOnInit(): void {
    console.log(this.backendErrorsProps)
  }
}
