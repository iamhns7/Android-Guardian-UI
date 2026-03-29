import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ScanSearch, 
  History, 
  Settings as SettingsIcon, 
  FileBox, 
  LogOut, 
  Search, 
  Download,
  AlertTriangle,
  Cpu,
  Clock,
  Sparkles,
  User,
  ShieldCheck,
  Check,
  ArrowUpDown
} from 'lucide-react';

export default function GuardianAI() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('reports');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/auth');
  };

  const menuItems = [
    { id: 'new-scan', label: 'Yeni Tarama', icon: ScanSearch },
    { id: 'past-scan', label: 'Geçmiş Taramalar', icon: History },
    { id: 'settings', label: 'Ayarlar', icon: SettingsIcon },
    { id: 'reports', label: 'Raporlar', icon: FileBox },
  ];

  return (
    <div className="flex h-screen w-full bg-[#111318] text-[#E2E8F0] font-sans overflow-hidden">
      
      {/* GLOW EFFECTS / SOFT LIGHTING (Premium hissiyat için yavanlığı alır) */}
      <div className="absolute top-[10%] left-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      {/* --- SIDEBAR --- */}
      <aside className="relative z-20 w-72 bg-[#0F1117] border-r border-[#1E232E] flex flex-col justify-between shadow-[8px_0_30px_rgba(0,0,0,0.3)]">
        <div>
          {/* Logo Area */}
          <div className="px-6 py-8 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 shadow-lg shadow-emerald-500/20">
               <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <h1 className="text-[16px] font-black text-white tracking-wide leading-tight">
              Android Resource<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-bold text-sm">Guardian AI</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 px-4 mt-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-xl text-[14px] font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/10 to-transparent text-blue-400 border border-blue-500/20'
                      : 'text-[#64748B] hover:bg-[#161920] hover:text-[#E2E8F0]'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-400' : 'text-[#64748B] group-hover:text-white'} transition-colors`} strokeWidth={isActive ? 2 : 1.5} />
                  {item.label}
                  
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-md bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"></span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Card & Log Out */}
        <div className="p-4 border-t border-[#1E232E] bg-[#12141A]">
           <div className="bg-[#1A1D24] border border-[#2B303B] rounded-xl p-3 mb-3 flex items-center gap-3 shadow-inner">
              <div className="h-10 w-10 shrink-0 rounded-full bg-[#2A3141] flex items-center justify-center border border-[#374151] text-[#94A3B8]">
                 <User className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="flex flex-col overflow-hidden">
                 <span className="text-sm font-bold text-white truncate">Yetkili Kullanıcı</span>
                 <span className="text-[11px] font-bold text-emerald-400 tracking-wide uppercase">Aktif Yönetici</span>
              </div>
           </div>
           <button
             onClick={handleLogout}
             className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-[#94A3B8] hover:bg-red-500/10 hover:text-red-400 transition-all border border-transparent hover:border-red-500/20"
           >
             <LogOut className="h-4 w-4" strokeWidth={2} />
             Sistemden Çıkış
           </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 flex-1 flex flex-col overflow-y-auto scrollbar-hide">
        
        {/* HEADER */}
        <header className="flex items-center justify-between px-10 py-8">
          <div className="flex items-center gap-3">
             <h2 className="text-2xl font-bold text-white tracking-tight">
               {menuItems.find(m => m.id === activeTab)?.label || 'Guardian AI'}
             </h2>
          </div>
          
          <div className="flex items-center gap-3">
             <button className="h-10 w-10 rounded-full bg-[#1F232B] flex items-center justify-center border border-[#374151] text-[#94A3B8] hover:text-white hover:border-blue-500/50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                <User className="h-5 w-5" strokeWidth={2} />
             </button>
          </div>
        </header>

        {/* DASHBOARD CONTAINER */}
        <div className="px-10 pb-12 w-full max-w-[1400px]">
          
          {activeTab === 'reports' && (
            <div className="w-full rounded-2xl bg-[#1A1D24] border border-[#2B303B] p-8 shadow-2xl relative overflow-hidden animate-in fade-in duration-500">
             
             {/* Subtytle / Search / Export */}
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white tracking-wide">MyAndroidApp_v2</h3>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Aktif</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="relative group">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B] group-focus-within:text-blue-400 transition-colors" strokeWidth={2} />
                    <input 
                      type="text" 
                      placeholder="Geçmişi Ara" 
                      className="w-56 rounded-xl bg-[#0F1115] border border-[#2B303B] px-4 py-2.5 pl-10 text-sm text-[#F8FAFC] font-medium placeholder-[#64748B] outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
                    />
                  </div>
                  
                  <button className="flex items-center gap-2 rounded-xl bg-[#F8FAFC] px-5 py-2.5 text-sm font-bold text-[#0F1115] hover:bg-white hover:shadow-lg hover:shadow-white/10 transition-all active:scale-95">
                    <Download className="h-4 w-4" strokeWidth={2} />
                    PDF Olarak İndir
                  </button>
                </div>
             </div>

             {/* Grid Stats & Chart */}
             <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 mb-8">
                
                {/* Stats */}
                <div className="flex flex-col gap-4">
                  
                  <div className="group flex items-center gap-5 rounded-2xl border border-[#2B303B] bg-[#1F232B] p-5 transition-all hover:bg-[#232731] hover:border-[#374151]">
                     <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#202E3E] text-blue-400 border border-blue-400/10 group-hover:scale-105 transition-transform">
                        <ScanSearch className="h-6 w-6" strokeWidth={1.5} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#94A3B8] mb-0.5">Taranan Toplam Dosya:</span>
                        <span className="text-3xl font-bold tracking-tight text-white">245</span>
                     </div>
                  </div>

                  <div className="group flex items-center gap-5 rounded-2xl border border-[#2B303B] bg-[#1F232B] p-5 transition-all hover:bg-[#232731] hover:border-[#374151]">
                     <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3E2D20] text-amber-500 border border-amber-500/10 group-hover:scale-105 transition-transform">
                        <Cpu className="h-6 w-6" strokeWidth={1.5} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#94A3B8] mb-0.5">Bulunan Toplam Risk:</span>
                        <div className="flex items-baseline gap-2.5">
                           <span className="text-3xl font-bold tracking-tight text-white">18</span>
                           <span className="text-sm font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">(Kritik: 5)</span>
                        </div>
                     </div>
                  </div>

                  <div className="group flex items-center gap-5 rounded-2xl border border-[#2B303B] bg-[#1F232B] p-5 transition-all hover:bg-[#232731] hover:border-[#374151]">
                     <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2D243E] text-purple-400 border border-purple-400/10 group-hover:scale-105 transition-transform">
                        <Clock className="h-6 w-6" strokeWidth={1.5} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#94A3B8] mb-0.5">Analiz Süresi:</span>
                        <span className="text-3xl font-bold tracking-tight text-white">32<span className="text-xl text-[#94A3B8] ml-0.5 font-medium">sn</span></span>
                     </div>
                  </div>

                </div>

                {/* Chart Segment - Elevated with Shadows */}
                <div className="relative flex flex-col items-center justify-center rounded-2xl border border-[#2B303B] bg-[#1F232B] p-6 shadow-inner">
                   
                   {/* Refined Pie/Donut with better colors */}
                   <div className="relative h-56 w-56">
                      <div 
                        className="absolute inset-0 rounded-full drop-shadow-xl"
                        style={{ background: 'conic-gradient(#3B82F6 0% 40%, #EF4444 40% 65%, #22C55E 65% 85%, #8B5CF6 85% 100%)' }}
                      ></div>
                      {/* Deep Inner Cutout */}
                      <div className="absolute inset-3 rounded-full bg-[#1F232B] flex items-center justify-center shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)]">
                         <div className="text-center">
                           <span className="block text-2xl font-black text-white">100%</span>
                           <span className="text-xs font-semibold text-[#8B98AB]">Analiz Edildi</span>
                         </div>
                      </div>
                   </div>

                   {/* Custom Legend Floating Tags (Better UI placement) */}
                   <div className="absolute right-6 top-[28%] flex items-center gap-2 text-xs font-bold text-[#E2E8F0]">
                     <span className="h-2 w-2 rounded-full bg-[#3B82F6] ring-4 ring-[#3B82F6]/20"></span> Yaşam Döngüsü (%40)
                   </div>
                   <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-bold text-[#E2E8F0]">
                     <span className="h-2 w-2 rounded-full bg-[#EF4444] ring-4 ring-[#EF4444]/20"></span> Bellek (%30)
                   </div>
                   <div className="absolute left-6 top-[45%] flex items-center gap-2 text-xs font-bold text-[#E2E8F0]">
                     <span className="h-2 w-2 rounded-full bg-[#22C55E] ring-4 ring-[#22C55E]/20"></span> Enerji (%20)
                   </div>
                   <div className="absolute left-16 top-6 flex items-center gap-2 text-xs font-bold text-[#E2E8F0]">
                     <span className="h-2 w-2 rounded-full bg-[#8B5CF6] ring-4 ring-[#8B5CF6]/20"></span> Arka Plan (%10)
                   </div>

                </div>

             </div>

             {/* Risks Data Table / List */}
             <div className="rounded-2xl border border-[#2B303B] bg-[#1F232B] overflow-hidden shadow-lg">
                <div className="px-5 py-3 border-b border-[#2B303B] bg-[#232731]">
                   <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">Uyarılar & Tespitler</span>
                </div>
                
                <div className="flex flex-col">
                  {/* Selected / Critical Item */}
                  <div className="flex items-center gap-4 border-b border-[#2B303B] bg-[#2A3141] p-4 relative group cursor-pointer">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-r-md"></div>
                    <AlertTriangle className="h-4 w-4 text-red-500 fill-red-500/20" strokeWidth={2} />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1">
                       <span className="text-[15px] font-bold text-white tracking-wide">MainActivity.kt</span>
                       <span className="hidden sm:block text-[#475569]">-</span>
                       <span className="text-sm font-medium text-[#CBD5E1]">Olası Bellek Sızıntısı (Memory Leak)</span>
                    </div>
                    <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded">Yüksek</span>
                  </div>

                  {/* Warning Items */}
                  {[1, 2, 3].map((idx) => (
                    <div key={idx} className="flex items-center gap-4 border-b border-[#2B303B] p-4 hover:bg-[#252A34] transition cursor-pointer group">
                      <AlertTriangle className="h-4 w-4 text-amber-500" strokeWidth={2} />
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1">
                         <span className="text-[15px] font-bold text-[#E2E8F0] tracking-wide group-hover:text-white transition-colors">DataSyncWorker.kt</span>
                         <span className="hidden sm:block text-[#475569]">-</span>
                         <span className="text-sm font-medium text-[#94A3B8]">Optimize Edilmemiş Arka Plan Görevi</span>
                      </div>
                      <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Orta</span>
                    </div>
                  ))}

                  <div className="flex items-center gap-4 p-4 hover:bg-[#252A34] transition cursor-pointer group relative">
                    <AlertTriangle className="h-4 w-4 text-red-500" strokeWidth={2} />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1">
                       <span className="text-[15px] font-bold text-[#E2E8F0] tracking-wide group-hover:text-white transition-colors">MainActivicaker.kt</span>
                       <span className="hidden sm:block text-[#475569]">-</span>
                       <span className="text-sm font-medium text-[#94A3B8]">Olası Bellek Sızıntısı (Memory Leak)</span>
                    </div>
                    
                    {/* Sparkles Decoration */}
                    <Sparkles className="absolute right-4 bottom-3 h-5 w-5 text-[#64748B] group-hover:text-amber-400 transition-colors" strokeWidth={1.5} />
                  </div>
                </div>

             </div>

            </div>
          )}

          {activeTab === 'past-scan' && (
            <div className="flex flex-col w-full rounded-2xl bg-[#1A1D24] border border-[#2B303B] shadow-2xl overflow-hidden min-h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-500">
               {/* Table Header Wrapper */}
               <div className="overflow-x-auto flex-1 p-2">
                 <table className="w-full text-left border-collapse">
                   <thead className="border-b border-[#2B303B] text-[13px] font-semibold text-[#8B98AB]">
                     <tr>
                        <th className="px-6 py-4 whitespace-nowrap w-[25%] bg-[#1A1D24] sticky top-0">
                           <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                              Proje Adı <ArrowUpDown className="h-3.5 w-3.5" />
                           </div>
                        </th>
                        <th className="px-6 py-4 whitespace-nowrap w-[20%] bg-[#1A1D24] sticky top-0">
                           <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                              Analiz Tarihi <ArrowUpDown className="h-3.5 w-3.5" />
                           </div>
                        </th>
                        <th className="px-6 py-4 whitespace-nowrap w-[15%] bg-[#1A1D24] sticky top-0">Durum</th>
                        <th className="px-6 py-4 whitespace-nowrap text-center w-[15%] bg-[#1A1D24] sticky top-0">Risk Sayısı</th>
                        <th className="px-6 py-4 whitespace-nowrap w-[25%] bg-[#1A1D24] sticky top-0">İşlemler</th>
                     </tr>
                   </thead>
                   <tbody className="text-[14px] text-[#E2E8F0] font-medium divide-y divide-[#2B303B]/50">
                     <tr className="hover:bg-[#20252E] transition-colors group">
                        <td className="px-6 py-4 text-white font-medium">MyAndroidApp_v1.zip</td>
                        <td className="px-6 py-4 text-[#94A3B8]">May 15, 2024</td>
                        <td className="px-6 py-4">
                           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#16A34A] text-white text-xs font-bold shadow-sm">
                             <Check className="h-3.5 w-3.5" strokeWidth={3} /> Tamamlandı
                           </span>
                        </td>
                        <td className="px-6 py-4 text-lg font-semibold text-white text-center">12</td>
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                              <button className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#0F1115] px-3 py-1.5 rounded-[5px] font-bold text-[13px] hover:bg-white transition-colors shadow-sm active:scale-95">
                                <Search className="h-3.5 w-3.5" strokeWidth={2.5}/> Dashboard'u Gör
                              </button>
                              <button className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#0F1115] px-3 py-1.5 rounded-[5px] font-bold text-[13px] hover:bg-white transition-colors shadow-sm active:scale-95">
                                <Download className="h-3.5 w-3.5" strokeWidth={2.5}/> PDF İndir
                              </button>
                           </div>
                        </td>
                     </tr>
                     <tr className="hover:bg-[#20252E] transition-colors group">
                        <td className="px-6 py-4 text-white font-medium">Ecommerce_App_Final.zip</td>
                        <td className="px-6 py-4 text-[#94A3B8]">May 10, 2024</td>
                        <td className="px-6 py-4">
                           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#DC2626] text-white text-xs font-bold shadow-sm">
                             <AlertTriangle className="h-3.5 w-3.5" strokeWidth={2.5} /> Kritik Riskler Bulundu
                           </span>
                        </td>
                        <td className="px-6 py-4 text-lg font-semibold text-white text-center">18</td>
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                              <button className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#0F1115] px-3 py-1.5 rounded-[5px] font-bold text-[13px] hover:bg-white transition-colors shadow-sm active:scale-95">
                                <Search className="h-3.5 w-3.5" strokeWidth={2.5}/> Dashboard'u Gör
                              </button>
                              <button className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#0F1115] px-3 py-1.5 rounded-[5px] font-bold text-[13px] hover:bg-white transition-colors shadow-sm active:scale-95">
                                <Download className="h-3.5 w-3.5" strokeWidth={2.5}/> PDF İndir
                              </button>
                           </div>
                        </td>
                     </tr>
                   </tbody>
                 </table>
               </div>

               {/* Bottom Button matching the image */}
               <div className="mt-auto p-4 bg-[#1A1D24] shadow-[0_-10px_20px_rgba(0,0,0,0.1)] relative z-10 mx-2 mb-2">
                  <button 
                    onClick={() => setActiveTab('new-scan')}
                    className="w-full bg-[#407DE7] hover:bg-[#3267CC] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] tracking-wide text-sm">
                     <FileBox className="h-4 w-4" strokeWidth={2} />
                     İlk Taramayı Başlat (New Scan)
                  </button>
               </div>

            </div>
          )}

          {/* Placeholder Fallback Display */}
          {activeTab !== 'reports' && activeTab !== 'past-scan' && (
            <div className="w-full h-[400px] flex flex-col items-center justify-center rounded-2xl bg-[#1A1D24] border border-dashed border-[#2B303B] text-[#64748B]">
               <ScanSearch className="h-12 w-12 mb-4 opacity-30" />
               <p className="text-[15px] font-medium tracking-wide">Bu sekme modülü henüz eklenmedi.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}