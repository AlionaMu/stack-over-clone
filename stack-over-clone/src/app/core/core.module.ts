import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {HeaderComponent} from './header/header.component'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class CoreModule {}
