import {UtilsService} from 'src/app/shared/services/utils.service'
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'filterByPagesCount',
})
export class FilterByPagesCountPipe implements PipeTransform {
  constructor(public utilsService: UtilsService) {}
  public transform(pages: number[], pagesCount: number): number[] {
    return this.utilsService.range(1, pagesCount)
  }
}
