import {Injectable} from '@angular/core'

@Injectable()
export class GetRandomIdService {
  constructor() {}

  getId(data: string) {
    return data + Math.floor(Math.random() * 100) + 1
  }
}
