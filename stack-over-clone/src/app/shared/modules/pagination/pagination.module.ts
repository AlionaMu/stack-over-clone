import {FilterByPagesCountPipe} from 'src/app/shared/modules/pagination/pipes/filterByPagesCount.pipe'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {UtilsService} from '../../services/utils.service'
import {PaginationComponent} from './components/pagination/pagination.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent, FilterByPagesCountPipe],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
