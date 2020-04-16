export interface Answer {
    id?: string;
    type?: string;
    imageURL?: string;
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id?: string;
    label: string;
    imageURL?: string;
    answers?: Answer[];
}
