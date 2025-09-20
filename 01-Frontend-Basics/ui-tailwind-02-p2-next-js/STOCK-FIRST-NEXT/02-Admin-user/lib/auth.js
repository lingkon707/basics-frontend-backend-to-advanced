// Simulate a logged-in user (mock only)
export function getCurrentUser() {
  return {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user' // or 'admin'
  }
}

export function isAdmin(user) {
  return user?.role === 'admin'
}

export function isAuthenticated(user) {
  return !!user?.id
}
