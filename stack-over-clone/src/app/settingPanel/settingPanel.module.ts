import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CreateQuestionEffect} from './store/effects/createQuestion.effect'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'

import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import {SettingPanelComponent} from './components/settingPanel.component'
import {SettingPanelService} from './services/settingPanel.service'

@NgModule({
  imports: [
    CommonModule,
    SettingPanelComponent,
    EffectsModule.forFeature([CreateQuestionEffect]),
    StoreModule.forFeature('settingPanel', reducers),
    AngularFirestoreModule,
  ],
  declarations: [SettingPanelComponent],
  providers: [SettingPanelService],
})
export class SettingPanelModule {}
