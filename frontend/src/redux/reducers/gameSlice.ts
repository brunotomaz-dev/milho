import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  points: number;
  name: string;
  role: string;
}

const initialState: GameState = {
  points: 0,
  name: '',
  role: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addPoint: (state, action: PayloadAction<number>) => {
      action.payload === 0
        ? (state.points = action.payload)
        : (state.points += action.payload);
    },
    addUser: (state, action: PayloadAction<{ name: string; role: string }>) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});

export const { addPoint, addUser } = gameSlice.actions;

export default gameSlice.reducer;
