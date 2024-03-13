import QuestionsODM from '../model/Questions.ODM';
import questions from './questionsData';

const questionsData = questions;

class SeedQuestions extends QuestionsODM {
  public async seedMany(): Promise<void> {
    await this._model.insertMany(questionsData);
  }
}

export default SeedQuestions;
