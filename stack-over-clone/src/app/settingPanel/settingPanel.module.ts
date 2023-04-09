import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SettingPanelComponent} from './components/settingPanel.component'
import {SettingPanelService} from './services/settingPanel.service'

@NgModule({
  imports: [CommonModule],
  declarations: [SettingPanelComponent],
  providers: [SettingPanelService],
  exports: [SettingPanelComponent],
})
export class SettingPanelModule {}
