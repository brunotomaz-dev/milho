import { IQuestionWithId } from '../interface/IQuestions';

class Question {
  private id: string;
  private question: string;
  private answer: string;
  private options: string[];

  constructor(question: IQuestionWithId) {
    this.id = question.id;
    this.question = question.question;
    this.answer = question.answer;
    this.options = question.options;
  }
}

export default Question;
