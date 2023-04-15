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

  // public errorMessages: string //(string | null)[] = []

  ngOnInit(): void {
    console.log(this.backendErrorsProps)
    // return this.backendErrorsProps.map
    // if (this.backendErrorsProps)
    //   this.errorMessages = Object.keys(this.backendErrorsProps).map(
    //     (name: string) => {
    //       if (this.backendErrorsProps) {
    //         console.log(this.backendErrorsProps)
    //         const messages = this.backendErrorsProps[name].join(' ')
    //         return `${name} ${messages}`
    //       }
    //       return null
    //     },
    //   )
  }
}
