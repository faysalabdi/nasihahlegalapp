"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, Calendar, ExternalLink, Clock, MapPin, AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
  hasLinks?: boolean;
}

interface ConversationContext {
  userInterests: string[];
  hasAskedForConsultation: boolean;
  currentTopic: string | null;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hello! I'm the Nasihah Legal Assistant. I'm here to help you with information about our legal services and answer your questions. How can I assist you today?",
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

const botResponses: { [key: string]: { text: string; quickReplies?: string[]; action?: string } } = {
  // Legal advice inquiries
  "i need legal advice": {
    text: "I'd be happy to help connect you with our legal experts. What type of legal matter are you dealing with? Please note that I can provide general information, but for specific legal advice, you'll need to speak with one of our qualified solicitors.",
    quickReplies: ["Family Law", "Property Law", "Criminal Law", "Commercial Law", "Wills & Estates", "Civil Litigation"]
  },
  
  // Consultation booking
  "book a consultation": {
    text: "Excellent! We offer FREE 30-minute initial consultations. Here are your options:\n\n📞 Call us directly: (03) 9123 4567\n💻 Book online through our contact form\n📧 Email: info@nasihahlegal.com.au\n\nOur consultations are available:\n• Monday-Friday: 8:30am-6:00pm\n• Emergency consultations available 24/7\n\nWould you like me to direct you to our booking page?",
    quickReplies: ["Yes, book online", "Call now", "Emergency consultation", "Tell me more about the process"]
  },
  
  // Practice areas
  "practice areas": {
    text: "We specialize in comprehensive legal services across multiple areas:\n\n🏠 Family Law - Divorce, custody, property settlements\n🏢 Property Law - Conveyancing, disputes, development\n⚖️ Criminal Law - Defense, representation, appeals\n💼 Commercial Law - Contracts, business disputes\n📋 Civil Litigation - Court representation, disputes\n📜 Wills & Estates - Estate planning, probate\n\nWhich area would you like to know more about?",
    quickReplies: ["Family Law", "Property Law", "Criminal Law", "Commercial Law", "Civil Litigation", "Wills & Estates"]
  },
  
  // Contact information
  "contact information": {
    text: "Here's how to reach Nasihah Legal:\n\n📞 Phone: (03) 9123 4567\n📧 Email: info@nasihahlegal.com.au\n📍 Address: 123 Sydney Road, Coburg VIC 3058\n\n🕒 Office Hours:\nMonday-Friday: 8:30am-6:00pm\nSaturday: By appointment\nSunday: Emergency consultations only\n\n🚨 24/7 Emergency Line Available\n\nWe're conveniently located near public transport and offer free parking.",
    quickReplies: ["Book consultation", "Get directions", "Emergency contact", "Send email"]
  },
  
  // Detailed practice area responses
  "family law": {
    text: "Our Family Law team provides compassionate and expert assistance with:\n\n💔 Divorce & Separation\n👨‍👩‍👧‍👦 Child Custody & Access\n🏠 Property Settlements\n💰 Spousal Maintenance\n🛡️ Domestic Violence Orders\n📋 Prenuptial Agreements\n👶 Adoption & Surrogacy\n\nWe understand these matters are emotionally challenging. Our team provides sensitive, professional support while fighting for your rights.\n\n✅ 95% success rate in family law cases\n✅ Experienced in complex property divisions\n✅ Child-focused approach to custody matters",
    quickReplies: ["Book family law consultation", "Property settlement info", "Child custody help", "Domestic violence support"]
  },
  
  "property law": {
    text: "Our Property Law services ensure smooth and secure transactions:\n\n🏠 Residential Conveyancing\n🏢 Commercial Property\n⚖️ Property Disputes\n🏗️ Development & Planning\n📋 Lease Agreements\n💼 Property Investment Advice\n🔍 Title Searches & Due Diligence\n\nWhether you're buying your first home or expanding your property portfolio, we provide:\n\n✅ Fixed-fee conveyancing from $800\n✅ Same-day contract reviews\n✅ Electronic settlement capability\n✅ Comprehensive title insurance",
    quickReplies: ["Conveyancing quote", "Property dispute help", "Commercial property", "First home buyer info"]
  },
  
  "criminal law": {
    text: "Our Criminal Law experts provide strong defense and representation:\n\n⚖️ Court Representation\n🚔 Police Interview Rights\n📋 Bail Applications\n🛡️ Appeals & Reviews\n💼 Traffic Offenses\n🏛️ Serious Criminal Charges\n📞 24/7 Emergency Response\n\n🚨 REMEMBER YOUR RIGHTS:\n• Right to remain silent\n• Right to legal representation\n• Right to contact a lawyer before questioning\n\n✅ Available 24/7 for arrests\n✅ Experienced in all Victorian courts\n✅ Strong track record of successful defenses",
    quickReplies: ["Emergency criminal help", "Traffic offense help", "Court representation", "Know your rights"]
  },
  
  "commercial law": {
    text: "Our Commercial Law team supports businesses of all sizes:\n\n📋 Contract Drafting & Review\n🤝 Business Partnerships\n💼 Employment Law\n🏢 Corporate Governance\n⚖️ Commercial Disputes\n💰 Debt Recovery\n🛡️ Intellectual Property\n📊 Compliance & Regulatory\n\nWe help businesses:\n\n✅ Minimize legal risks\n✅ Draft bulletproof contracts\n✅ Resolve disputes efficiently\n✅ Ensure regulatory compliance\n\nFrom startups to established enterprises, we're your legal partner.",
    quickReplies: ["Contract review", "Business dispute", "Employment law", "Startup legal help"]
  },
  
  "civil litigation": {
    text: "Our Civil Litigation team fights for your rights in:\n\n⚖️ Personal Injury Claims\n🏠 Property Disputes\n💼 Contract Disputes\n💰 Debt Recovery\n🏗️ Building & Construction\n🚗 Motor Vehicle Accidents\n📋 Professional Negligence\n🏛️ VCAT Proceedings\n\nWe offer:\n\n✅ No Win, No Fee arrangements*\n✅ Experienced court advocates\n✅ Alternative dispute resolution\n✅ Comprehensive case management\n\n*Conditions apply - ask about our fee arrangements",
    quickReplies: ["Personal injury claim", "Property dispute", "No win no fee info", "VCAT help"]
  },
  
  "wills & estates": {
    text: "Protect your family's future with our Estate Planning services:\n\n📜 Will Preparation\n👥 Estate Administration\n⚖️ Probate Applications\n🏠 Estate Disputes\n💼 Power of Attorney\n🏥 Advance Care Directives\n💰 Trust Establishment\n📋 Estate Planning Reviews\n\nDon't leave your loved ones uncertain:\n\n✅ Simple wills from $200\n✅ Complex estate planning available\n✅ Regular review reminders\n✅ Secure document storage\n\nEstate planning isn't just for the wealthy - everyone needs a will.",
    quickReplies: ["Simple will", "Complex estate planning", "Probate help", "Power of attorney"]
  },
  
  // Action-based responses
  "yes, contact page": {
    text: "Perfect! I'll direct you to our contact page where you can book your free consultation online. You'll be able to select your preferred time and provide details about your legal matter.",
    action: "redirect_contact"
  },
  
  "call now": {
    text: "Great choice! You can call us directly at (03) 9123 4567. Our lines are open Monday-Friday 8:30am-6:00pm, with emergency consultations available 24/7.",
    action: "call_phone"
  },
  
  "emergency consultation": {
    text: "For urgent legal matters, we provide 24/7 emergency consultations:\n\n🚨 Criminal arrests: Call immediately\n⚖️ Court deadlines: Same-day response\n🏠 Urgent family matters: Available weekends\n💼 Business crises: Rapid response team\n\nEmergency contact: (03) 9123 4567\nPress 1 for emergency legal assistance\n\nNote: Emergency consultation fees may apply.",
    quickReplies: ["Call emergency line", "What constitutes emergency", "Emergency fees"]
  },
  
  // Helpful responses
  "what constitutes emergency": {
    text: "Legal emergencies include:\n\n🚔 Police arrest or questioning\n⏰ Court deadlines within 24-48 hours\n🏠 Domestic violence situations\n💼 Business closure threats\n🏛️ Urgent injunction needs\n📋 Time-sensitive contract issues\n\nIf you're unsure, call us - we'd rather help unnecessarily than miss a critical deadline.",
    quickReplies: ["Call now", "Book regular consultation", "More practice areas"]
  },
  
  "fees": {
    text: "Our transparent fee structure:\n\n💰 FREE 30-minute initial consultation\n📋 Fixed fees for standard services\n⏰ Competitive hourly rates\n🏆 No Win, No Fee options available*\n💳 Payment plans available\n📊 Detailed cost estimates provided\n\n*Conditions apply. We'll explain all costs upfront with no hidden fees.",
    quickReplies: ["Free consultation", "Payment plans", "No win no fee", "Get quote"]
  },
  
  // Default and fallback responses
  "default": {
    text: "Thank you for your question. While I can provide general information about our services, for specific legal advice, I recommend speaking with one of our qualified solicitors.\n\nWould you like to book a FREE 30-minute consultation to discuss your matter in detail?",
    quickReplies: ["Book consultation", "Call now", "More information", "Practice areas"]
  },
  
  "greeting": {
    text: "Hello! Welcome back to Nasihah Legal. How can I assist you today?",
    quickReplies: ["I need legal advice", "Book consultation", "Practice areas", "Contact info"]
  }
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext>({
    userInterests: [],
    hasAskedForConsultation: false,
    currentTopic: null
  });
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show notification when chat is closed and new message arrives
  useEffect(() => {
    if (!isOpen && messages.length > 1 && messages[messages.length - 1].isBot) {
      setHasNewMessage(true);
      // Auto-clear notification after 5 seconds
      const timer = setTimeout(() => setHasNewMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [messages, isOpen]);

  const generateBotResponse = (userMessage: string): { text: string; quickReplies?: string[]; action?: string } => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Handle greetings
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)$/)) {
      return botResponses.greeting;
    }
    
    // Handle thanks
    if (lowerMessage.match(/(thank|thanks|appreciate)/)) {
      return {
        text: "You're very welcome! I'm here to help. Is there anything else you'd like to know about our legal services?",
        quickReplies: ["Book consultation", "Practice areas", "Contact info", "Fees"]
      };
    }
    
    // Handle specific keywords with partial matching
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && key !== 'greeting') {
        // More flexible keyword matching
        const keywords = key.split(' ');
        const matchesAll = keywords.every(keyword => 
          lowerMessage.includes(keyword) || 
          lowerMessage.includes(keyword.replace(/s$/, '')) // Handle plurals
        );
        
        if (matchesAll) {
          // Update context
          setContext(prev => ({
            ...prev,
            currentTopic: key,
            userInterests: Array.from(new Set([...prev.userInterests, key]))
          }));
          
          return response;
        }
      }
    }
    
    // Handle consultation-related queries
    if (lowerMessage.includes('consult') || lowerMessage.includes('appointment') || lowerMessage.includes('meeting')) {
      setContext(prev => ({ ...prev, hasAskedForConsultation: true }));
      return botResponses["book a consultation"];
    }
    
    // Handle cost/fee queries
    if (lowerMessage.includes('cost') || lowerMessage.includes('fee') || lowerMessage.includes('price') || lowerMessage.includes('charge')) {
      return botResponses.fees;
    }
    
    // Handle location queries
    if (lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('address')) {
      return botResponses["contact information"];
    }
    
    // Handle time/hours queries
    if (lowerMessage.includes('hours') || lowerMessage.includes('open') || lowerMessage.includes('time')) {
      return {
        text: "Our office hours are:\n\n🕒 Monday-Friday: 8:30am-6:00pm\n🕒 Saturday: By appointment only\n🕒 Sunday: Emergency consultations\n\n📞 24/7 Emergency line: (03) 9123 4567\n\nWe're flexible with appointment times to suit your schedule.",
        quickReplies: ["Book consultation", "Emergency contact", "Call now"]
      };
    }
    
    // Contextual responses based on conversation history
    if (context.currentTopic && !context.hasAskedForConsultation) {
      return {
        text: `Since you're interested in ${context.currentTopic}, would you like to book a free consultation with one of our specialists in this area? We can provide specific advice tailored to your situation.`,
        quickReplies: ["Yes, book consultation", "Tell me more", "Other practice areas", "Contact info"]
      };
    }
    
    // Default response with context
    return {
      text: "I'd be happy to help you with that. For specific legal advice and detailed information about your situation, I recommend speaking with one of our qualified solicitors.\n\nWe offer FREE 30-minute consultations where you can discuss your matter confidentially with an expert.",
      quickReplies: ["Book free consultation", "Call now", "Practice areas", "More information"]
    };
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate realistic bot typing delay
    const typingDelay = Math.min(text.length * 50 + 1000, 3000); // 50ms per character, max 3 seconds
    
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse.text,
        isBot: true,
        timestamp: new Date(),
        quickReplies: botResponse.quickReplies,
        hasLinks: botResponse.text.includes('http') || botResponse.action === 'redirect_contact'
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // Handle actions
      if (botResponse.action === 'redirect_contact') {
        setTimeout(() => {
          window.open('/contact', '_blank');
        }, 1000);
      } else if (botResponse.action === 'call_phone') {
        setTimeout(() => {
          window.open('tel:0391234567', '_self');
        }, 1000);
      }
    }, typingDelay);
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

  const clearChat = () => {
    setMessages(initialMessages);
    setContext({
      userInterests: [],
      hasAskedForConsultation: false,
      currentTopic: null
    });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessage(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
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
          <>
            <MessageCircle className="w-6 h-6 text-white" />
            {hasNewMessage && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </motion.div>
            )}
          </>
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
            className="fixed bottom-24 right-6 z-40 w-80 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-dark text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold">Nasihah Legal Assistant</h3>
                  <p className="text-xs text-gray-300 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="text-gray-300 hover:text-white text-xs px-2 py-1 rounded hover:bg-white/10 transition-colors"
                title="Clear conversation"
              >
                Clear
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] px-3 py-2 rounded-lg ${
                    message.isBot 
                      ? 'bg-white text-gray-800 shadow-sm border' 
                      : 'bg-primary-dark text-white'
                  }`}>
                    <div className="flex items-start gap-2">
                      {message.isBot && (
                        <Bot className="w-4 h-4 mt-0.5 text-primary-dark flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
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
                <div className="flex flex-wrap gap-2 px-2">
                  {messages[messages.length - 1].quickReplies!.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-2 text-xs bg-white border border-primary-light text-primary-dark rounded-full hover:bg-primary-dark hover:text-white hover:border-primary-dark transition-all duration-200 shadow-sm"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start px-2">
                  <div className="bg-white px-3 py-2 rounded-lg flex items-center gap-2 shadow-sm border">
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
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-3 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex justify-center gap-4 text-xs">
                <a 
                  href="tel:0391234567" 
                  className="text-primary-dark hover:text-accent-gold hover:underline flex items-center gap-1 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  Call Now
                </a>
                <a 
                  href="/contact" 
                  className="text-primary-dark hover:text-accent-gold hover:underline flex items-center gap-1 transition-colors"
                >
                  <Calendar className="w-3 h-3" />
                  Book Online
                </a>
                <a 
                  href="mailto:info@nasihahlegal.com.au" 
                  className="text-primary-dark hover:text-accent-gold hover:underline flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 