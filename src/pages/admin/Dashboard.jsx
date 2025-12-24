import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LogOut, Save, RefreshCw, LayoutDashboard } from 'lucide-react';

const Dashboard = () => {
  const { services, updateService, resetData } = useData();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('services');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setEditForm({ ...service });
  };

  const handleSave = () => {
    updateService(editingId, editForm);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...editForm.features];
    newFeatures[index] = value;
    setEditForm(prev => ({ ...prev, features: newFeatures }));
  };

  return (
    <>
      <Helmet>
        <title>Yönetim Paneli - Prime Dijital</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <div className="w-64 bg-prime-black text-white flex-shrink-0 hidden md:flex flex-col">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white">Prime<span className="text-prime-yellow">Panel</span></h2>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <button 
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'services' ? 'bg-prime-yellow text-prime-black font-bold' : 'text-gray-400 hover:bg-gray-800'}`}
            >
              <LayoutDashboard size={20} />
              Hizmetler
            </button>
          </nav>
          <div className="p-4 border-t border-gray-800">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-gray-800 transition-colors"
            >
              <LogOut size={20} />
              Çıkış Yap
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto h-screen">
          <header className="bg-white shadow-sm p-6 flex justify-between items-center md:hidden">
            <h2 className="text-xl font-bold text-prime-black">Prime<span className="text-prime-yellow">Panel</span></h2>
            <button onClick={handleLogout} className="text-red-500"><LogOut size={24} /></button>
          </header>

          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Hizmet Yönetimi</h1>
              <button 
                onClick={resetData}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-prime-black bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <RefreshCw size={16} />
                Varsayılana Dön
              </button>
            </div>

            <div className="grid gap-8">
              {services.map(service => (
                <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {editingId === service.id ? (
                    <div className="p-6 space-y-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold">Hizmeti Düzenle: {service.title}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
                          <input
                            type="text"
                            name="title"
                            value={editForm.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-prime-yellow outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">İkon Adı (Palette, Printer, Code)</label>
                          <select
                            name="iconName"
                            value={editForm.iconName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-prime-yellow outline-none"
                          >
                            <option value="Palette">Palette (Grafik)</option>
                            <option value="Printer">Printer (Baskı)</option>
                            <option value="Code">Code (Yazılım)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                        <textarea
                          name="description"
                          value={editForm.description}
                          onChange={handleChange}
                          rows="3"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-prime-yellow outline-none"
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Özellikler</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {editForm.features.map((feature, idx) => (
                            <input
                              key={idx}
                              type="text"
                              value={feature}
                              onChange={(e) => handleFeatureChange(idx, e.target.value)}
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-prime-yellow outline-none text-sm"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                        <button 
                          onClick={handleCancel}
                          className="px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          İptal
                        </button>
                        <button 
                          onClick={handleSave}
                          className="px-6 py-2 rounded-lg bg-prime-yellow text-prime-black font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2"
                        >
                          <Save size={18} />
                          Kaydet
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="bg-prime-yellow/20 text-prime-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">{service.id}</span>
                            <h3 className="text-xl font-bold">{service.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-4 max-w-2xl">{service.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((f, i) => (
                              <span key={i} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">{f}</span>
                            ))}
                          </div>
                        </div>
                        <button 
                          onClick={() => handleEdit(service)}
                          className="bg-prime-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors"
                        >
                          Düzenle
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
