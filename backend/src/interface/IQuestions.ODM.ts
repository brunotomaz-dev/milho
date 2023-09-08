import { IQuestions } from './IQuestions';

export interface IQuestionsODM {
  create: (questions: IQuestions) => Promise<IQuestions>;
  read: (tier: string) => Promise<IQuestions | null>;
}
