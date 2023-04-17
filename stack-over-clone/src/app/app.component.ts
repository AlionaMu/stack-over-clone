import {Component} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {getCurrentUserAction} from './auth/store/actions/getCurrentUser.action'
import {currentUserSelector} from './auth/store/selectors'
import {SettingsService} from './shared/services/settings.service'
import {CurrentUserInterface} from './shared/types/currentUser.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction())
  }
}
