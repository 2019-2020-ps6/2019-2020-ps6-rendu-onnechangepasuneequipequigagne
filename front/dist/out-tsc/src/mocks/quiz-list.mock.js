export const QUESTION_ACTOR = {
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
export const QUESTION_SPORT = {
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
export const QUIZ_LIST = [
    {
        name: 'Les Acteurs',
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
//# sourceMappingURL=quiz-list.mock.js.map