import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  initialState: { userEmail: '' } as AdminSliceInitialState,
  name: 'admin',
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    setProjectionId: (state, action: PayloadAction<number>) => {
      state.projectionId = action.payload;
    },
  },
});

export const { setUserEmail, setProjectionId } = adminSlice.actions;
export default adminSlice.reducer;
