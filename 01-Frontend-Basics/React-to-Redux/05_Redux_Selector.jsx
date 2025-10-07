'use client';
import { useSelector } from 'react-redux';

export default function UserList() {
  const users = useSelector(state => state.users.data);
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
