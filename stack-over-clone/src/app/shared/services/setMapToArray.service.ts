import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SetMapToArrayService {
  constructor() {}

  setMapToArray(map: Map<string, boolean>) {
    const arrValues = Array.from(map.values())
    const arrKeys = Array.from(map.keys())
    return arrKeys.filter(
      (item: string, index: number) => arrValues[index] === true,
    )
  }
}
