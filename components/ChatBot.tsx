
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { getPetAdvice } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; content: string }[]>([
    { role: 'model', content: "Hello! I'm your AI Pet Assistant. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    const response = await getPetAdvice(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300 transform">
          {/* Header */}
          <div className="bg-emerald-600 dark:bg-emerald-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-400 dark:bg-emerald-500 flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Pet Health AI</p>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" /> Online Assistant
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-emerald-700 dark:hover:bg-emerald-800 p-1 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="h-[350px] md:h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[90%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${
                    msg.role === 'user' ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-xs md:text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 dark:bg-indigo-700 text-white rounded-tr-none' 
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-700'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl rounded-tl-none">
                  <Loader2 className="animate-spin text-emerald-600 dark:text-emerald-400" size={16} />
                  <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-medium">Analyzing advice...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-1 items-center border border-slate-200 dark:border-slate-700 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200 dark:focus-within:ring-emerald-900 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about your pet..."
                className="flex-grow bg-transparent border-none focus:ring-0 text-sm py-2 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 disabled:text-slate-400 dark:disabled:text-slate-600 p-1"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] md:text-[10px] text-slate-400 dark:text-slate-500 mt-2 text-center">
              AI advice is not a substitute for professional medical diagnosis.
            </p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 dark:bg-emerald-700 text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-sm hidden sm:block">
            Ask AI Assistant
          </span>
          <MessageCircle size={24} className="md:w-7 md:h-7" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
