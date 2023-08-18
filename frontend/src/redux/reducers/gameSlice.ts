import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  points: number;
}

const initialState: GameState = {
  points: 0
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addPoint: (state, action: PayloadAction<number>) => {
      state.points += action.payload;
    }
  }
});

export const { addPoint } = gameSlice.actions;

export default gameSlice.reducer;