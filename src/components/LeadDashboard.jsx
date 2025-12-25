import React, { useState, useEffect } from 'react';
import { Users, Mail, TrendingUp, Clock, Eye, MousePointer, Target } from 'lucide-react';

const LeadDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({
    totalLeads: 0,
    todayLeads: 0,
    conversionRate: 0,
    averageTimeSpent: 0
  });

  useEffect(() => {
    loadLeads();
    calculateStats();
  }, []);

  const loadLeads = () => {
    const storedLeads = JSON.parse(localStorage.getItem('captured_leads') || '[]');
    setLeads(storedLeads.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  };

  const calculateStats = () => {
    const storedLeads = JSON.parse(localStorage.getItem('captured_leads') || '[]');
    const today = new Date().toDateString();
    
    const todayLeads = storedLeads.filter(lead => 
      new Date(lead.createdAt).toDateString() === today
    ).length;

    const averageTimeSpent = storedLeads.reduce((sum, lead) => 
      sum + (lead.timeSpent || 0), 0
    ) / (storedLeads.length || 1);

    setStats({
      totalLeads: storedLeads.length,
      todayLeads,
      conversionRate: 0, // Calculate based on your conversion tracking
      averageTimeSpent: Math.round(averageTimeSpent / 1000) // Convert to seconds
    });
  };

  const getSourceBadgeColor = (source) => {
    const colors = {
      interested: 'bg-blue-100 text-blue-800',
      engaged: 'bg-green-100 text-green-800',
      highIntent: 'bg-purple-100 text-purple-800',
      exit: 'bg-red-100 text-red-800',
      return: 'bg-yellow-100 text-yellow-800'
    };
    return colors[source] || 'bg-gray-100 text-gray-800';
  };

  const getLeadScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 font-bold';
    if (score >= 50) return 'text-yellow-600 font-semibold';
    return 'text-gray-600';
  };

  const formatTimeSpent = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`;
    }
    return `${remainingSeconds}s`;
  };

  const exportLeads = () => {
    const csvContent = [
      ['Email', 'Source', 'Lead Score', 'Time Spent', 'Max Scroll', 'Page', 'Created At'].join(','),
      ...leads.map(lead => [
        lead.email,
        lead.source,
        lead.leadScore,
        formatTimeSpent(lead.timeSpent),
        `${lead.maxScroll}%`,
        lead.page,
        new Date(lead.createdAt).toLocaleString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Lead Dashboard</h1>
          <button
            onClick={exportLeads}
            className="bg-prime-yellow text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
          >
            Export CSV
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Toplam Lead</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Bugünkü Lead</p>
                <p className="text-2xl font-bold text-gray-900">{stats.todayLeads}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Ortalama Süre</p>
                <p className="text-2xl font-bold text-gray-900">{stats.averageTimeSpent}s</p>
              </div>
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Dönüşüm Oranı</p>
                <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
              </div>
              <Target className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Son Lead'ler</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kaynak
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lead Puanı
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Süre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Scroll
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sayfa
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tarih
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">
                          {lead.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSourceBadgeColor(lead.source)}`}>
                        {lead.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm ${getLeadScoreColor(lead.leadScore)}`}>
                        {lead.leadScore || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Clock className="w-4 h-4 text-gray-400 mr-1" />
                        {formatTimeSpent(lead.timeSpent)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Eye className="w-4 h-4 text-gray-400 mr-1" />
                        {lead.maxScroll}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.page}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(lead.createdAt).toLocaleDateString('tr-TR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {leads.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Henüz lead bulunmuyor</p>
              <p className="text-sm text-gray-400">Ziyaretçiler e-postalarını bıraktığında burada görünecek</p>
            </div>
          )}
        </div>

        {/* Real-time Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gerçek Zamanlı Aktivite</h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span>Sistem aktif ve ziyaretçileri izliyor...</span>
            </div>
            <div className="text-xs text-gray-500">
              Lead capture sistemi 15+ saniye sitede kalan ziyaretçileri otomatik olarak takip ediyor.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDashboard;