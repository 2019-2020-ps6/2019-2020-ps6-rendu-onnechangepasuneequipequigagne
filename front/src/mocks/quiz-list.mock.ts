import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

 export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',
     answers: [
         {
             value: 'Les tuches II',
             isCorrect: false,
         },
         {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
 };

 export const QUESTION_SPORT: Question = {
    label: 'Zinedine Zidane est un joueur de ...',
    answers: [
        {
            value: 'tennis',
            isCorrect: false,
        },
        {
            value: 'football sur gazon',
            isCorrect: true,
        }
    ]
};


export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Acteur',
        id: '1',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
        theme: 'Sport',
        id: '2',
        questions: [QUESTION_SPORT],
    }
];
