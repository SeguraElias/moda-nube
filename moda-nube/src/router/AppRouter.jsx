import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Home, Navbar } from '../catalog';
import { Login } from '../auth';
import { Footer } from '../catalog'; 

export const AppRouter = () => {
  const [authStatus, setAuthStatus] = useState('not-authenticated'); // Estado de autenticación

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Simulación de inicio de sesión exitoso
    setAuthStatus('authenticated');
    // Redirige al usuario a la página de inicio
    return <Navigate to="/" replace />;
  };

  return (
    <>
      <Navbar authStatus={authStatus} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login onLogin={handleLogin} />} /> 
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
      {window.location.pathname !== '/auth/login'}
    </>
  );
};
