import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Kullanıcı adı veya şifre hatalı!');
    }
  };

  return (
    <>
      <Helmet>
        <title>Yönetici Girişi - Prime Dijital</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-prime-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-prime-black" size={32} />
            </div>
            <h1 className="text-2xl font-bold">Yönetici Girişi</h1>
            <p className="text-gray-500 text-sm mt-2">İçerik yönetim paneline erişmek için giriş yapın</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kullanıcı Adı</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-prime-yellow focus:ring-2 focus:ring-prime-yellow/20 transition-all outline-none"
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Şifre</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-prime-yellow focus:ring-2 focus:ring-prime-yellow/20 transition-all outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-prime-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Giriş Yap
            </button>
          </form>
          
          <div className="mt-6 text-center text-xs text-gray-400">
            <p>Varsayılan: admin / admin123</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
