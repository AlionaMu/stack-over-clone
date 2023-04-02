import { GetAllQuestionsResponseInterface } from './getAllQuestionsResponse.interface';

export interface AllQuestionsStateInterface {
  isLoading: boolean;
  error: string | null;
  questions: GetAllQuestionsResponseInterface | null;
}
