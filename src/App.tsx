import React from 'react';
import './App.css';
import ModuleBtn from './components/ModuleBtn';
import PostList from './components/PostList';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { newFetchUsers } from './store/slices/userSlice/asyncActions';

function App() {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <ModuleBtn fetchUsers={() => dispatch(newFetchUsers())}>
        Запросить данные о пользователях
      </ModuleBtn>
      {isLoading && "Идет загрузка пользователей..."}
      {error && <h1>{error}</h1>}
      {users.length > 0 && JSON.stringify(users, null, 2)}
      <PostList />
    </div>
  );
}

export default App;
