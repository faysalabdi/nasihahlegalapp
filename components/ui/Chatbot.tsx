"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, Calendar } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hello! I'm here to help you with your legal questions. How can I assist you today?",
    isBot: true,
    timestamp: new Date(),
    quickReplies: [
      "I need legal advice",
      "Book a consultation",
      "Practice areas",
      "Contact information"
    ]
  }
];

const botResponses: { [key: string]: { text: string; quickReplies?: string[] } } = {
  "i need legal advice": {
    text: "I'd be happy to help connect you with our legal experts. What type of legal matter are you dealing with?",
    quickReplies: ["Family Law", "Property Law", "Criminal Law", "Commercial Law", "Other"]
  },
  "book a consultation": {
    text: "Great! We offer free 30-minute consultations. You can book online or call us at (03) 9123 4567. Would you like me to redirect you to our contact page?",
    quickReplies: ["Yes, contact page", "Call now", "Tell me more"]
  },
  "practice areas": {
    text: "We specialize in several areas of law including Family Law, Property Law, Criminal Law, Commercial Law, Civil Litigation, and Wills & Estates. Which area interests you?",
    quickReplies: ["Family Law", "Property Law", "Criminal Law", "View all areas"]
  },
  "contact information": {
    text: "You can reach us at:\n📞 (03) 9123 4567\n📧 info@nasihahlegal.com.au\n📍 123 Sydney Road, Coburg VIC 3058\n\nOffice hours: Mon-Fri 8:30am-6:00pm",
    quickReplies: ["Book consultation", "Send email", "Get directions"]
  },
  "family law": {
    text: "Our family law team handles divorce, custody arrangements, property settlements, and domestic violence matters. We understand these are sensitive issues and provide compassionate support.",
    quickReplies: ["Book consultation", "Learn more", "Other practice areas"]
  },
  "property law": {
    text: "We assist with property purchases, sales, conveyancing, property disputes, and development matters. Our team ensures smooth property transactions.",
    quickReplies: ["Book consultation", "Conveyancing info", "Property disputes"]
  },
  "criminal law": {
    text: "Our criminal law experts defend clients facing charges from minor offenses to serious crimes. We provide strong representation and protect your rights.",
    quickReplies: ["Emergency consultation", "Types of charges", "Court representation"]
  },
  "default": {
    text: "Thank you for your question. For specific legal advice, I recommend speaking with one of our qualified solicitors. Would you like to book a free consultation?",
    quickReplies: ["Book consultation", "Call now", "Send email"]
  }
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): { text: string; quickReplies?: string[] } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for specific keywords
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Default response
    return botResponses.default;
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse.text,
        isBot: true,
        timestamp: new Date(),
        quickReplies: botResponse.quickReplies
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-primary-dark hover:bg-primary-dark/90'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-dark text-white p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-dark" />
              </div>
              <div>
                <h3 className="font-semibold">Nasihah Legal Assistant</h3>
                <p className="text-xs text-gray-300">Online now</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-primary-dark text-white'
                  }`}>
                    <div className="flex items-start gap-2">
                      {message.isBot && (
                        <Bot className="w-4 h-4 mt-0.5 text-primary-dark flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      {!message.isBot && (
                        <User className="w-4 h-4 mt-0.5 text-gray-300 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Replies */}
              {messages.length > 0 && messages[messages.length - 1].isBot && messages[messages.length - 1].quickReplies && (
                <div className="flex flex-wrap gap-2">
                  {messages[messages.length - 1].quickReplies!.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1 text-xs bg-primary-light text-primary-dark rounded-full hover:bg-primary-dark hover:text-white transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-3 py-2 rounded-lg flex items-center gap-2">
                    <Bot className="w-4 h-4 text-primary-dark" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light text-sm"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="px-3 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-center gap-4 mt-2">
                <a href="tel:0391234567" className="text-xs text-primary-dark hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  Call Now
                </a>
                <a href="/contact" className="text-xs text-primary-dark hover:underline flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 