import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {HeaderComponent} from './header/header.component'

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class CoreModule {}
