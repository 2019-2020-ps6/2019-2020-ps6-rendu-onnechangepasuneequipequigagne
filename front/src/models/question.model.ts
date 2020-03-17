export interface Answer {
    type?: string;
    imageURL?: string;
    value: string;
    isCorrect: boolean;
}

export interface Question {
    label: string;
    imageURL?: string;
    answers: Answer[];
}
