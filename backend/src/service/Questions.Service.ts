import * as errors from 'restify-errors';
import QuestionsODM from '../database/model/Questions.ODM';
import Question from '../domains/Question';
import { IQuestion, IQuestionWithId } from '../interface/IQuestions';

class QuestionsService {
  private _questionsModel: QuestionsODM;

  constructor(private questionsModel?: QuestionsODM) {
    this._questionsModel = questionsModel || new QuestionsODM();
  }

  private static createQuestionsDomain(questions: IQuestionWithId): Question {
    return new Question(questions);
  }

  public async read(tier: string): Promise<IQuestion[] | null> {
    const questions = await this._questionsModel.read(tier);
    if (!questions) throw new errors.NotFoundError('Questions not found');
    return questions;
  }

  public async addQuestion(role: string, tier: string, question: IQuestion): Promise<Question> {
    if (role !== 'admin') {
      throw new errors.UnauthorizedError(
        'You are not authorized to add questions',
      );
    }
    const questionAdd = await this._questionsModel.addQuestionToTier(
      tier,
      question,
    );
    if (!questionAdd) throw new errors.NotFoundError('Question not added');

    const { id } = questionAdd.questions[questionAdd.questions.length - 1];
    const newQuestion = { id, ...question };

    return QuestionsService.createQuestionsDomain(newQuestion);
  }
}

export default QuestionsService;
