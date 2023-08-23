import { Model, Schema, model, models } from 'mongoose';
import IScore from '../../interface/IScore';
import IScoreODM from '../../interface/IScore.ODM';

class ScoreODM implements IScoreODM {
  protected _model: Model<IScore>;
  protected _schema: Schema;

  constructor() {
    this._schema = new Schema<IScore>({
      name: { type: String, required: true },
      score: { type: Number, required: true },
      date: { type: Date, required: true },
    });
    this._model = models.Score || model<IScore>('Score', this._schema);
  }

  public async create(score: IScore): Promise<IScore> {
    return this._model.create({ ...score });
  }

  public async read(name: string): Promise<IScore | null> {
    return this._model.findOne({ name });
  }

  public async readManyByName(name: string): Promise<IScore[]> {
    return this._model.find({ name }).sort({ score: -1 }).limit(10);
  }

  public async readAll(): Promise<IScore[]> {
    return this._model.find().sort({ score: -1 }).limit(10);
  }
}

export default ScoreODM;
