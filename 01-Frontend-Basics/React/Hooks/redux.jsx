// Redux Toolkit (Complex Apps)

// store/slices/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get('/api/users');
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    removeUser: (state, action) => {
      state.list = state.list.filter(user => user.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer
  }
});

// Usage in Component
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser } from './store/slices/userSlice';

function UserList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.users);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {list.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}