import { AuthStateInterface } from '../../auth/types/authState.interface';
import { CreateQuestionStateInterface } from './../../createQuestion/types/createQuestionState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  createQuestion: CreateQuestionStateInterface;
}
