import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { requestData } from '../api/requests';
import GeneralScore from '../components/GeneralScore';
import PersonalScore from '../components/PersonalScore';
import { IScoreData } from '../interfaces/IScore';

const Placar: React.FC = () => {
  const [renderPlayerScore, setrenderPlayerScore] = useState<boolean>(true);
  const [renderGeneralScore, setrenderGeneralScore] = useState<boolean>(false);
  const [playerData, setData] = useState<IScoreData[]>([]);
  const [allPlayersData, setAllPlayersData] = useState<IScoreData[]>([]);

  const params = useParams();
  const navigate = useNavigate();

  const getScore = useCallback(async () => {
    const data = await requestData(`/score/${params.name}`);
    const generalData = await requestData('/score');
    setData(data.score);
    setAllPlayersData(generalData.scores);
  }, [params.name]);

  useEffect(() => {
    getScore();
  }, [getScore]);

  return (
    <main className='main-container'>
      <section className='form score-card'>
        <div className='radio-switch'>
          <label
            htmlFor='scoreSwitchPersonal'
            className={`radio-switch__label ${
              renderPlayerScore ? 'radio-switch__label--selected' : ''
            }`}
            onClick={() => {
              setrenderPlayerScore(true);
              setrenderGeneralScore(false);
            }}
          >
            <input
              type='radio'
              name='scoreSwitch'
              id='scoreSwitchPersonal'
              className='radio-switch__input'
              checked={renderPlayerScore}
              readOnly
            />
            Meu Placar
          </label>
          <label
            htmlFor='scoreSwitchGeneral'
            className={`radio-switch__label ${
              renderGeneralScore ? 'radio-switch__label--selected' : ''
            }`}
            onClick={() => {
              setrenderPlayerScore(false);
              setrenderGeneralScore(true);
            }}
          >
            <input
              type='radio'
              name='scoreSwitch'
              id='scoreSwitchGeneral'
              className='radio-switch__input'
              checked={renderGeneralScore}
              readOnly
            />
            Placar Geral
          </label>
        </div>
        {renderPlayerScore && <PersonalScore data={playerData} />}
        {renderGeneralScore && (
          <GeneralScore
            playerScore={playerData}
            generalScore={allPlayersData}
          />
        )}
        <button type='button' onClick={() => navigate('/config')}>
          Voltar
        </button>
      </section>
    </main>
  );
};

export default Placar;
