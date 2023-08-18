import { Dispatch, SetStateAction } from "react";

export interface IGameProps {
  choice: Dispatch<SetStateAction<number>>; 
  }

export interface IQuestions {
    id: number;
    Question: string;
    Answer: string;
    Options: string[];
  }

export interface IGameQuestionsProps {
  tierQuestions: IQuestions[];
  tier: number;
  setTier: Dispatch<SetStateAction<number>>;
}
