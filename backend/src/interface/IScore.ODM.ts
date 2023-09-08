import IScore from './IScore';

interface IScoreODM {
  create: (score: IScore) => Promise<IScore>;
  read: (name: string) => Promise<IScore | null>;
  readAll: () => Promise<IScore[]>;
  readManyByName: (name: string) => Promise<IScore[]>;
}

export default IScoreODM;
