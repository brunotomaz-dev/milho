export interface IQuestions {
  n1: IQuestion[];
  n2: IQuestion[];
  n3: IQuestion[];
  n4: IQuestion[];
}

export interface IQuestion {
  id: number;
  question: string;
  answer: string;
  options: string[];
}
