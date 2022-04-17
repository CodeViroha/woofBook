import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ViewProfile from './components/ViewProfile';
import NavBar from './components/NavBar'

//Acts as a Router for Routes
function App() {
  const [user, setUser] = useState({ valid: false });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login setUser={setUser} />} />

        <Route path="dashboard" element={
          <ProtectedRoute user={user}>
            <NavBar setUser={setUser} user={user} />
            <Dashboard user={user} setUser={setUser} />
          </ProtectedRoute>
        } />
        <Route path="user/:id" element={
          <ProtectedRoute user={user}>
            <NavBar setUser={setUser} user={user} />
            <ViewProfile />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

//Protecting Routes
const ProtectedRoute = ({
  user,
  redirectPath = '/',
  children,
}) => {
  if (!user.valid) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default App;
