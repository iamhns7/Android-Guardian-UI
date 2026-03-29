import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from '../pages/auth/Auth';
import Register from '../pages/auth/Register';
import Main from '../pages/main/Main';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Varsayılan yönlendirme */}
        <Route path="/" element={<Navigate to="/auth" replace />} />
        
        {/* Kimlik doğrulama işlemleri */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        
        {/* Ana sayfa - Dashboard */}
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}