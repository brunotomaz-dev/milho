export interface IQuestions {
  tier: string;
  questions: IQuestionWithId[];
}

export interface IQuestionsSeed {
  tier: string;
  questions: IQuestion[];
}

export interface IQuestion {
  id?: string;
  question: string;
  answer: string;
  options: string[];
}

export interface IQuestionWithId extends IQuestion {
  id: string;
}
