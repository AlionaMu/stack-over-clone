import {ThemeSwitchComponent} from './components/theme-switch/theme-switch.component'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SettingPanelComponent} from './components/settingPanel.component'
import {SettingPanelService} from './services/settingPanel.service'
import {MatButtonToggleModule} from '@angular/material/button-toggle'

@NgModule({
  imports: [CommonModule, MatButtonToggleModule],
  declarations: [SettingPanelComponent, ThemeSwitchComponent],
  providers: [SettingPanelService],
  exports: [SettingPanelComponent],
})
export class SettingPanelModule {}
