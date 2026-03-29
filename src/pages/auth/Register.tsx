import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Şifreler birbiriyle eşleşmiyor. Lütfen kontrol edin!');
      return;
    }
    
    // Kullanıcı verisini LocalStorage'a kaydetme
    localStorage.setItem('user', JSON.stringify({ username, password }));
    
    alert('Kayıt başarıyla oluşturuldu! Şimdi giriş yapabilirsiniz.');
    navigate('/auth'); // Başarılı kayıt sonrası Login sayfasına yönlendir
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0f1c] px-4 font-sans text-slate-200">
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[20%] h-72 w-72 md:h-96 md:w-96 rounded-full bg-emerald-600/10 blur-[100px] animate-pulse"></div>
        <div className="absolute top-[40%] right-[20%] h-72 w-72 md:h-96 md:w-96 rounded-full bg-indigo-600/10 blur-[100px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
      </div>

      <div className="relative z-10 w-full max-w-sm rounded-[2rem] bg-slate-900/60 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-2xl border border-white/5 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.3)] hover:border-white/10 duration-500">
        
        {/* Logo area */}
        <div className="mb-6 flex flex-col items-center justify-center text-center">
          <div className="group relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-inner transition-transform duration-500 hover:scale-110">
            <div className="absolute inset-0 rounded-2xl bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/30 transition-all duration-500"></div>
            <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M19 8v6" />
              <path d="M22 11h-6" />
            </svg>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Guardian'a Katıl</h1>
          <p className="mt-2 text-sm text-slate-400 font-medium">Sisteme erişmek için yeni bir hesap oluşturun.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="group">
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors group-focus-within:text-emerald-400">Kullanıcı Adı</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50 focus:bg-black/40 focus:ring-4 focus:ring-emerald-500/10"
              placeholder="yeni_kullanici"
              required
            />
          </div>

          <div className="group">
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors group-focus-within:text-emerald-400">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50 focus:bg-black/40 focus:ring-4 focus:ring-emerald-500/10"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="group pb-2">
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors group-focus-within:text-emerald-400">Şifreyi Onayla</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50 focus:bg-black/40 focus:ring-4 focus:ring-emerald-500/10"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="group relative mt-2 flex w-full justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10 hidden sm:inline">Kayıt Ol</span>
            <span className="relative z-10 sm:hidden">Kayıt Ol</span>
          </button>
        </form>

        <p className="mt-6 text-center text-sm font-medium text-slate-400">
          Zaten hesabınız var mı?{' '}
          <Link to="/auth" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Giriş yapın
          </Link>
        </p>

      </div>
    </div>
  );
}