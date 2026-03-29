import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from '../pages/auth/Auth';
import Register from '../pages/auth/Register';
import GuardianAI from '../pages/guardian-ai/GuardianAI';

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
        <Route path="/main" element={<Navigate to="/guardian-ai/new-scan" replace />} />
        <Route path="/guardian-ai" element={<Navigate to="/guardian-ai/new-scan" replace />} />
        <Route path="/guardian-ai/:tab" element={<GuardianAI />} />
      </Routes>
    </BrowserRouter>
  );
}