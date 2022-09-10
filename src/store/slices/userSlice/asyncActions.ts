import { IUser } from '../../models/userTypes';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async(dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching())
//     const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?5');
//     setTimeout(() => {
//       dispatch(userSlice.actions.usersFetchingSuccess(responce.data))
//     }, 1500)
//   } catch (e:any) {
//     dispatch(userSlice.actions.usersFetchingError(e.message));
//   }
// }

export const newFetchUsers = createAsyncThunk('users/fetchData', async (_, thunkApi) => {
  try {
    const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    return responce.data;
  } catch (error) {
    return thunkApi.rejectWithValue("Не удалось загрузить пользователей")
  }
})