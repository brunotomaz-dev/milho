import { Dispatch, SetStateAction } from 'react';

export interface IGameProps {
  choice: Dispatch<SetStateAction<number>>;
}

export interface IQuestions {
  id: number;
  question: string;
  answer: string;
  options: string[];
}

export interface IGameQuestionsProps {
  tierQuestions: IQuestions[];
  tier: number;
  setTier: Dispatch<SetStateAction<number>>;
}
