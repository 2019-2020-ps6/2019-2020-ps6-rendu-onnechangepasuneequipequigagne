import {Quiz} from "./quiz.model";

export interface User{
    userName: string;
    id: string;
    profilePicture?: string;
    quizzes?: Quiz[];
}
