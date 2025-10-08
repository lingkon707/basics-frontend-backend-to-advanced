import axios from 'axios';

// Create axios instance with defaults
const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor (add auth token)
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor (handle errors globally)
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API functions
export const userAPI = {
  // GET - Fetch all users
  getAll: async () => {
    const response = await api.get('/users');
    return response.data;
  },
  
  // GET - Fetch single user
  getById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
  
  // POST - Create user
  create: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },
  
  // PUT - Update user
  update: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },
  
  // DELETE - Delete user
  delete: async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  }
};

// Usage in component
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await userAPI.getAll();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  const handleCreate = async (userData) => {
    try {
      const newUser = await userAPI.create(userData);
      setUsers([...users, newUser]);
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}