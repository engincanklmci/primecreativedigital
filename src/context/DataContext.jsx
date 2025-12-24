import React, { createContext, useState, useContext, useCallback, useMemo } from 'react';

const DataContext = createContext();

const defaultServices = [
  {
    id: 'grafik-tasarim',
    title: 'Grafik Tasarım',
    description: 'Prime Dijital olarak, markanızın görsel kimliğini en üst düzeyde temsil edecek grafik tasarım hizmetleri sunuyoruz. Deneyimli tasarım ekibimiz, her projede özgünlüğü ve profesyonelliği bir araya getirerek, hedef kitlenizle güçlü bir bağ kurmanızı sağlar.',
    features: ['Kurumsal Kimlik Tasarımı', 'Logo ve Marka Tasarımı', 'Broşür ve Katalog Tasarımı', 'Sosyal Medya Görselleri', 'Reklam ve Billboard Tasarımı', 'Ambalaj Tasarımı'],
    iconName: 'Palette',
    color: 'bg-prime-yellow',
    reverse: false
  },
  {
    id: 'baski-hizmetleri',
    title: 'Baskı Hizmetleri',
    description: 'Son teknoloji baskı makinelerimiz ve kaliteli malzemelerimizle, her türlü baskı ihtiyacınız için profesyonel çözümler sunuyoruz. Küçük tirajlardan büyük projelere kadar, her işi titizlikle ve zamanında teslim ediyoruz.',
    features: ['Dijital ve Ofset Baskı', 'Katalog ve Dergi Baskısı', 'Billboard ve Dış Mekan Baskı', 'Kartvizit ve Kurumsal Materyaller', 'Sticker ve Etiket Baskı', 'Özel Promosyon Ürünleri'],
    iconName: 'Printer',
    color: 'bg-prime-yellow',
    reverse: true
  },
  {
    id: 'yazilim-gelistirme',
    title: 'Yazılım Geliştirme',
    description: 'Dijital dünyada işinizi öne çıkaracak, kullanıcı deneyimini ön planda tutan yazılım çözümleri geliştiriyoruz. React, Node.js, Python gibi modern teknolojilerle, hızlı, güvenli ve ölçeklenebilir projeler hayata geçiriyoruz.',
    features: ['Web Site ve E-Ticaret Geliştirme', 'Mobil Uygulama Geliştirme', 'Kurumsal Yazılım Çözümleri', 'API ve Entegrasyon Hizmetleri', 'SEO ve Dijital Pazarlama', 'Bakım ve Destek Hizmetleri'],
    iconName: 'Code',
    color: 'bg-prime-yellow',
    reverse: false
  }
];

export const DataProvider = ({ children }) => {
  const [services, setServices] = useState(() => {
    try {
      const savedServices = localStorage.getItem('prime_services');
      return savedServices ? JSON.parse(savedServices) : defaultServices;
    } catch (error) {
      console.error('Error loading services from localStorage:', error);
      return defaultServices;
    }
  });

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => {
    const updateService = (id, updatedData) => {
      setServices(prevServices => 
        prevServices.map(service => 
          service.id === id ? { ...service, ...updatedData } : service
        )
      );
    };

    const resetData = () => {
      setServices(defaultServices);
      try {
        localStorage.removeItem('prime_services');
      } catch (error) {
        console.error('Error removing services from localStorage:', error);
      }
    };

    return { services, updateService, resetData };
  }, [services]);

  // Sync with localStorage using useEffect
  React.useEffect(() => {
    try {
      localStorage.setItem('prime_services', JSON.stringify(services));
    } catch (error) {
      console.error('Error saving services to localStorage:', error);
    }
  }, [services]);

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
