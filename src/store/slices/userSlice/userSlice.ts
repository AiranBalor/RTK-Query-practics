import { newFetchUsers } from './asyncActions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUsersState } from '../../models/userTypes';

const initialState: IUsersState = {
  users: [],
  isLoading: false,
  error: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching: (state) => {
      state.isLoading = true;
    },
    usersFetchingSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = '';
    },
    usersFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    }
  },
  extraReducers: {
    [newFetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [newFetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = '';  
    },
    [newFetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    }
  }
})

export default userSlice.reducer;