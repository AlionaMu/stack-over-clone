import {StoreModule} from '@ngrx/store'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {UserProfileComponent} from './components/userProfile.component'
import {MatCardModule} from '@angular/material/card'

const routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
  declarations: [UserProfileComponent],
  providers: [],
})
export class UserProfileModule {}
