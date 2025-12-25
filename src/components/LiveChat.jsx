import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, Clock } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatStage, setChatStage] = useState('greeting'); // greeting, questions, contact
  const messagesEndRef = useRef(null);

  // Predefined responses for common questions
  const botResponses = {
    greeting: {
      message: "Merhaba! Prime Dijital'e hoş geldiniz! 👋\n\nSize nasıl yardımcı olabilirim?",
      options: [
        "Web tasarım fiyatları",
        "SEO hizmetleri",
        "Mobil uygulama",
        "Teklif almak istiyorum"
      ]
    },
    
    responses: {
      "web tasarım fiyatları": {
        message: "Web tasarım fiyatlarımız proje kapsamına göre değişmektedir:\n\n💼 Kurumsal Web: 15.000₺ - 35.000₺\n🛒 E-ticaret: 25.000₺ - 50.000₺\n📱 Responsive Tasarım: Dahil\n🔧 1 Yıl Bakım: Ücretsiz\n\nDetaylı teklif için iletişim bilgilerinizi alabilir miyim?",
        nextStage: "contact"
      },
      
      "seo hizmetleri": {
        message: "SEO hizmetlerimiz ile Google'da üst sıralara çıkın! 🚀\n\n✅ Teknik SEO Analizi\n✅ Anahtar Kelime Araştırması\n✅ İçerik Optimizasyonu\n✅ Link Building\n✅ Aylık Raporlama\n\nAylık 5.000₺'den başlayan paketlerimiz var. Size özel teklif hazırlayalım mı?",
        nextStage: "contact"
      },
      
      "mobil uygulama": {
        message: "Mobil uygulama geliştirme hizmetlerimiz:\n\n📱 iOS & Android\n⚡ React Native / Flutter\n🎨 UI/UX Tasarım Dahil\n🔧 Backend Geliştirme\n📊 Analytics Entegrasyonu\n\nFiyatlar 30.000₺'den başlıyor. Projenizi konuşalım mı?",
        nextStage: "contact"
      },
      
      "teklif almak istiyorum": {
        message: "Harika! Size özel teklif hazırlamak için birkaç bilgiye ihtiyacım var:\n\n📋 Hangi hizmetimizle ilgileniyorsunuz?\n🎯 Projenizin hedefi nedir?\n⏰ Ne zaman başlamak istiyorsunuz?\n\nİletişim bilgilerinizi de alabilir miyim?",
        nextStage: "contact"
      }
    }
  };

  const quickActions = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "Hemen Ara",
      action: () => window.location.href = "tel:+902125550123"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "Email Gönder",
      action: () => window.location.href = "mailto:info@primedigitalcreative.com"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Randevu Al",
      action: () => window.open("https://calendly.com/primedigital", "_blank")
    }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage(botResponses.greeting.message, botResponses.greeting.options);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (message, options = null) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: message,
        sender: 'bot',
        timestamp: new Date(),
        options: options
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (message) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    }]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    addUserMessage(inputMessage);
    handleBotResponse(inputMessage.toLowerCase());
    setInputMessage('');
    
    // Track chat interaction
    trackEvent('chat_message_sent', 'engagement', inputMessage);
  };

  const handleOptionClick = (option) => {
    addUserMessage(option);
    handleBotResponse(option.toLowerCase());
  };

  const handleBotResponse = (userInput) => {
    // Find matching response
    const response = botResponses.responses[userInput];
    
    if (response) {
      setTimeout(() => {
        addBotMessage(response.message);
        if (response.nextStage) {
          setChatStage(response.nextStage);
        }
      }, 1000);
    } else {
      // Default response for unmatched input
      setTimeout(() => {
        addBotMessage(
          "Anlıyorum! Bu konuda size daha detaylı bilgi verebilmek için uzmanlarımızdan biriyle görüşmenizi öneriyorum. İletişim bilgilerinizi alabilir miyim? 📞"
        );
        setChatStage('contact');
      }, 1000);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    trackEvent('chat_toggle', 'engagement', isOpen ? 'closed' : 'opened');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className={`
            w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center
            ${isOpen 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-prime-yellow hover:bg-yellow-400 animate-pulse'
            }
          `}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-black" />
          )}
        </button>
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-prime-yellow p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-prime-yellow" />
              </div>
              <div>
                <h3 className="font-semibold text-black">Prime Dijital Asistan</h3>
                <p className="text-xs text-black/70">Genellikle hemen yanıtlar</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-xs p-3 rounded-lg text-sm
                  ${message.sender === 'user' 
                    ? 'bg-prime-yellow text-black' 
                    : 'bg-gray-100 text-gray-900'
                  }
                `}>
                  <div className="whitespace-pre-line">{message.text}</div>
                  
                  {/* Options */}
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left p-2 bg-white rounded border hover:bg-gray-50 transition-colors text-xs"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2 mb-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="flex-1 flex items-center justify-center gap-1 p-2 bg-gray-100 rounded text-xs hover:bg-gray-200 transition-colors"
                >
                  {action.icon}
                  <span>{action.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Mesajınızı yazın..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-yellow text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-prime-yellow text-black rounded-lg hover:bg-yellow-400 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;