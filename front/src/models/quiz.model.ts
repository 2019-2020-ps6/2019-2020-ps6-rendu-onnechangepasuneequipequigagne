import { Question } from './question.model';
import {History} from './history.model';

export interface Quiz {
    name: string;
    theme: string;
    imageURL?: string;
    id: string;
    creationDate?: Date;
    questions: Question[];
    quizHistory: History[];
}
