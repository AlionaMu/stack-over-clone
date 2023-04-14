import {GetUserProfileEffect} from './store/effects/getUserProfile.effect'
import {StoreModule} from '@ngrx/store'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {UserProfileService} from './services/userProfile.service'
import {UserProfileComponent} from './components/userProfile.component'
import {reducers} from './store/reducers'
import {MatCardModule} from '@angular/material/card'

const routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    MatCardModule,
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}
