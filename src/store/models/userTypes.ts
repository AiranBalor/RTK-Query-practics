export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUsersState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}