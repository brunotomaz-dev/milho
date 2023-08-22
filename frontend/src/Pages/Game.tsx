import React, { useEffect, useState } from 'react';
import GameChoices from '../components/GameChoices';
import GameIndividual from '../components/GameIndividual';
import { useAppDispatch, useAppSelector } from '../redux/hook/hooks';
import { addUser } from '../redux/reducers/gameSlice';

const Game: React.FC = () => {
  const [choice, setChoice] = useState(0);
  const { name } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const localStorageName = localStorage.getItem('name') as string;
  const localStorageRole = localStorage.getItem('role') as string;

  useEffect(() => {
    if (name === '') {
      dispatch(addUser({ name: localStorageName, role: localStorageRole }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
    {(choice === 0) && <GameChoices choice={setChoice} />}
    {(choice === 1) && <GameIndividual />}
    </main>
  )
}

export default Game;