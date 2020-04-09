import {Historical} from './historical.model';

export interface User {
    firstName: string;
    lastName: string;
    id: string;
    profilePicture?: string;
    quizzesId?: string[];
    quizzesHistorical: Historical[];
}
