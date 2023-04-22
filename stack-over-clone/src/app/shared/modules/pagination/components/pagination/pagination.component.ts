import {Component, Input, OnInit, Output} from '@angular/core'
import {SettingsService} from 'src/app/shared/services/settings.service'
import {UtilsService} from 'src/app/shared/services/utils.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number = {} as number
  @Input('limit') limitProps: number = 5
  @Input('currentPage') currentPageProps: number = {} as number
  @Input('url') urlProps: string = ''

  pagesCount: number = 0
  pages: number[] = []

  @Output('getPages') getPages: number = this.pagesCount

  constructor(
    private utilsService: UtilsService,
    public settingsService: SettingsService,
  ) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }

  setPage(): void {
    this.settingsService.setPageInfo(this.pagesCount)
  }
}
