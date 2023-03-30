import { ProfileInterface } from './profile.interface';

export interface QuestionInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  author: ProfileInterface;
  favorited: boolean;
  favoritesCount: number;
}
