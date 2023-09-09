import { Model, Schema, model, models } from 'mongoose';
import { IQuestion, IQuestionWithId, IQuestions } from '../../interface/IQuestions';
import { IQuestionsODM } from '../../interface/IQuestions.ODM';

class QuestionsODM implements IQuestionsODM {
  protected _model: Model<IQuestions>;
  protected _schema: Schema;

  constructor() {
    const questionSchema = new Schema<IQuestion>({
      question: { type: String, required: true },
      answer: { type: String, required: true },
      options: [{ type: [String], required: true }],
    });

    this._schema = new Schema<IQuestions>({
      tier: { type: String, required: true },
      questions: [questionSchema],
    });
    this._model = models.Questions || model<IQuestions>('Questions', this._schema);
  }

  public async create(questions: IQuestions): Promise<IQuestions> {
    return this._model.create({ ...questions });
  }

  public async read(tier: string): Promise<IQuestion[] | null> {
    return this._model.findOne({ tier });
  }

  public async addQuestionToTier(tier: string, question: IQuestion): Promise<IQuestions | null> {
    return this._model
      .findOneAndUpdate({ tier }, { $addToSet: { questions: question } }, { new: true });
  }

  public async update(tier: string, question: IQuestionWithId): Promise<IQuestions | null> {
    const update = {
      $set: {
        [`${tier}.$[elem].question`]: question.question,
        [`${tier}.$[elem].answer`]: question.answer,
        [`${tier}.$[elem].options`]: question.options,
      },
    };

    const options = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      arrayFilters: [{ 'elem.id': question.id }],
      new: true,
    };

    return this._model.findOneAndUpdate({ tier, [`${tier}.id`]: question.id }, update, options);
  }
}

export default QuestionsODM;
