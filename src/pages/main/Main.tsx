import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/auth');
  };

  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0f1c] font-sans text-slate-200">
      
      {/* Background glow */}
      <div className="absolute top-[20%] left-[30%] h-96 w-96 rounded-full bg-emerald-600/10 blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-slate-900/60 p-10 text-center shadow-2xl backdrop-blur-2xl border border-white/10">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/20 text-emerald-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
          </svg>
        </div>
        
        <h1 className="mb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Hoş Geldiniz, {user ? user.username : 'Misafir'}!
        </h1>
        <p className="mb-8 text-slate-400">Android Guardian ana kontrol paneline başarıyla giriş yaptınız.</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl bg-black/20 p-6 border border-white/5">
            <span className="block text-3xl font-bold text-white mb-1">0</span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Taramalar</span>
          </div>
          <div className="rounded-2xl bg-black/20 p-6 border border-white/5">
            <span className="block text-3xl font-bold text-emerald-400 mb-1">Güvenli</span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Sistem Durumu</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-6 py-3 font-semibold text-red-400 transition-all hover:bg-red-500 hover:text-white"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}