import {AnswerOrder} from './answerorder.model';

export interface Historical {
  id: string;
  userId?: string;
  quizId: string;
  quizName: string;
  score: string;
  date: string;
  answersOrder?: AnswerOrder[];
}
