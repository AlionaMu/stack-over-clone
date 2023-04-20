import {ThemeSwitchComponent} from './components/theme-switch/theme-switch.component'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SettingPanelComponent} from './components/settingPanel.component'
import {SettingPanelService} from './services/settingPanel.service'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {TagsFormComponent} from './components/tagsForm/tagsForm.component'

@NgModule({
  imports: [CommonModule, MatButtonToggleModule],
  declarations: [
    SettingPanelComponent,
    ThemeSwitchComponent,
    TagsFormComponent,
  ],
  providers: [SettingPanelService],
  exports: [SettingPanelComponent],
})
export class SettingPanelModule {}
