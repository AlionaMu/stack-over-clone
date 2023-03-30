import { map } from 'rxjs/operators';
import { SaveQuestionResponseInterface } from './../../shared/types/saveQuestionResponse.interface';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { QuestionInterface } from './../../shared/types/question.interface';
import { QuestionInputInterface } from './../../shared/types/questionInput.interface';

@Injectable()
export class CreateQuestionService {
  constructor(private http: HttpClient) {}

  // createQuestion(
  //   questionInput: QuestionInputInterface
  // ): Observable<QuestionInterface> {
  //   const fullUrl = environment.apiUrl + '/questions';
  //   return this.http
  //     .post<SaveQuestionResponseInterface>(fullUrl, questionInput)
  //     .pipe(
  //       map((response: SaveQuestionResponseInterface) => {
  //         return response.question;
  //       })
  //     );
  // }
}
