import { Question } from './question.model';

export interface Quiz {
    name: string;
    theme: string;
    imageURL?: string;
    id: string;
    creationDate?: Date;
    questions: Question[];
}
