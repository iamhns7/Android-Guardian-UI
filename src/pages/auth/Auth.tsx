import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // LocalStorage'daki "registeredUser" verisini çekiyoruz
    const storedUserStr = localStorage.getItem('registeredUser');
    
    if (storedUserStr) {
      const storedUser = JSON.parse(storedUserStr);
      
      // Bilgiler eşleşiyorsa guardian-ai sayfasına yolla
      if (storedUser.username === username && storedUser.password === password) {
        // Oturumu aktif olan kişiyi "currentUser" olarak kaydediyoruz
        localStorage.setItem('currentUser', JSON.stringify({ username: storedUser.username }));
        navigate('/guardian-ai/new-scan');
      } else {
        alert('Hatalı kullanıcı adı veya şifre!');
      }
    } else {
      alert('Sistemde kayıtlı kullanıcı bulunamadı. Lütfen önce kayıt olun.');
    }
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
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <div className="group relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-inner transition-transform duration-500 hover:scale-110">
            <div className="absolute inset-0 rounded-2xl bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/30 transition-all duration-500"></div>
            <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Android Guardian</h1>
          <p className="mt-2 text-sm text-slate-400 font-medium">Sisteme erişmek için giriş yapın.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="group">
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors group-focus-within:text-emerald-400">Kullanıcı Adı</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50 focus:bg-black/40 focus:ring-4 focus:ring-emerald-500/10"
              placeholder="admin"
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

          <div className="flex items-center justify-between pt-1 pb-2">
           <div className="flex items-center group">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500/30 ring-offset-slate-900 cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-slate-400 cursor-pointer group-hover:text-slate-300 transition-colors">
                Beni Hatırla
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors drop-shadow-sm">
                Şifremi unuttum?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="group relative mt-4 flex w-full justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10 hidden sm:inline">Giriş Yap</span>
            <span className="relative z-10 sm:hidden">Giriş Yap</span>
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700/50"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#0f172a] px-4 py-1 rounded-full font-semibold uppercase tracking-widest text-slate-400 border border-slate-700/50 shadow-sm">
                veya
              </span>
            </div>
          </div>

          <button
            type="button"
            className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:shadow-lg active:scale-[0.98]"
          >
            <svg className="h-5 w-5 fill-current transition-transform group-hover:-translate-y-0.5 duration-300" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub ile Devam Et
          </button>
        </div>

        <p className="mt-8 text-center text-sm font-medium text-slate-400">
          Hesabınız yok mu?{' '}
          <Link to="/register" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Hemen kayıt olun
          </Link>
        </p>
      </div>
    </div>
  );
}