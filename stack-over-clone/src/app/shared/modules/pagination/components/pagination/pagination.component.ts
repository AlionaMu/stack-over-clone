import {Component, Input, OnInit} from '@angular/core'
import {SettingsService} from 'src/app/shared/services/settings.service'
import {UtilsService} from 'src/app/shared/services/utils.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('totalCount') totalCountProps: number = {} as number
  @Input('pagesCount') pagesCountProps: number = {} as number
  @Input('currentPage') currentPageProps: number = {} as number
  @Input('url') urlProps: string = ''

  pagesCount: number = 0
  pages: number[] = []

  constructor(
    private utilsService: UtilsService,
    public settingsService: SettingsService,
  ) {}

  ngOnInit(): void {
    this.pagesCount = this.settingsService.pageInfo.pagesCount
    this.pages = this.utilsService.range(1, this.pagesCount)
    this.settingsService.setPageInfo(this.pagesCountProps)
  }
}
