"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, User, Bot, Phone, Mail, Calendar, ExternalLink, Clock, MapPin, AlertCircle } from 'lucide-react';

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
  lastBotResponse: string | null;
  responseCount: number;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hello! I'm the Nasihah Legal Assistant. I'm here to help you with information about our legal services. Please select an option below to get started:",
    isBot: true,
    timestamp: new Date(),
    quickReplies: [
      "I need legal advice",
      "Book a consultation",
      "Practice areas",
      "Contact information",
      "Office hours",
      "Fees & pricing"
    ]
  }
];

const botResponses: { [key: string]: { text: string; quickReplies?: string[]; action?: string } } = {
  // Main menu responses
  "I need legal advice": {
    text: "I'd be happy to help connect you with our legal experts. What type of legal matter are you dealing with? Please note that I can provide general information, but for specific legal advice, you'll need to speak with one of our qualified solicitors.",
    quickReplies: ["Family Law", "Property Law", "Criminal Law", "Commercial Law", "Wills & Estates", "Civil Litigation", "Back to main menu"]
  },
  
  "Book a consultation": {
    text: "Excellent! We offer FREE 30-minute initial consultations. Here are your booking options:\n\n📞 Phone: (03) 9123 4567\n💻 Online booking through our contact form\n📧 Email: info@nasihahlegal.com.au\n\nOur consultations are available:\n• Monday-Friday: 8:30am-6:00pm\n• Emergency consultations available 24/7\n\nHow would you like to book?",
    quickReplies: ["Book online now", "Call to book", "Email to book", "Emergency consultation", "Back to main menu"]
  },
  
  "Practice areas": {
    text: "We specialize in comprehensive legal services across multiple areas:\n\n🏠 Family Law - Divorce, custody, property settlements\n🏢 Property Law - Conveyancing, disputes, development\n⚖️ Criminal Law - Defense, representation, appeals\n💼 Commercial Law - Contracts, business disputes\n📋 Civil Litigation - Court representation, disputes\n📜 Wills & Estates - Estate planning, probate\n\nWhich area would you like to know more about?",
    quickReplies: ["Family Law", "Property Law", "Criminal Law", "Commercial Law", "Civil Litigation", "Wills & Estates", "Back to main menu"]
  },
  
  "Contact information": {
    text: "Here's how to reach Nasihah Legal:\n\n📞 Phone: (03) 9123 4567\n📧 Email: info@nasihahlegal.com.au\n📍 Address: 123 Sydney Road, Coburg VIC 3058\n\n🕒 Office Hours:\nMonday-Friday: 8:30am-6:00pm\nSaturday: By appointment\nSunday: Emergency consultations only\n\n🚨 24/7 Emergency Line Available\n\nWe're conveniently located near public transport and offer free parking.",
    quickReplies: ["Call now", "Get directions", "Send email", "Book consultation", "Back to main menu"]
  },
  
  "Office hours": {
    text: "Our office hours are:\n\n🕒 Monday-Friday: 8:30am-6:00pm\n🕒 Saturday: By appointment only\n🕒 Sunday: Emergency consultations\n\n📞 24/7 Emergency line: (03) 9123 4567\n\nWe're flexible with appointment times to suit your schedule.",
    quickReplies: ["Book consultation", "Call now", "Emergency contact", "Back to main menu"]
  },
  
  "Fees & pricing": {
    text: "Our transparent fee structure:\n\n💰 FREE 30-minute initial consultation\n📋 Fixed fees for standard services:\n   • Simple wills from $200\n   • Conveyancing from $800\n⏰ Competitive hourly rates for complex matters\n🏆 No Win, No Fee options available*\n💳 Payment plans available\n📊 Detailed cost estimates provided upfront\n\n*Conditions apply. We'll explain all costs with no hidden fees.",
    quickReplies: ["Free consultation", "Payment plans", "No win no fee info", "Get quote", "Back to main menu"]
  },
  
  // Practice area details
  "Family Law": {
    text: "Our Family Law team provides compassionate and expert assistance with:\n\n💔 Divorce & Separation\n👨‍👩‍👧‍👦 Child Custody & Access\n🏠 Property Settlements\n💰 Spousal Maintenance\n🛡️ Domestic Violence Orders\n📋 Prenuptial Agreements\n👶 Adoption & Surrogacy\n\nWe understand these matters are emotionally challenging. Our team provides sensitive, professional support while fighting for your rights.\n\n✅ 95% success rate in family law cases\n✅ Experienced in complex property divisions\n✅ Child-focused approach to custody matters",
    quickReplies: ["Book family law consultation", "Property settlement info", "Child custody help", "Domestic violence support", "Back to practice areas"]
  },
  
  "Property Law": {
    text: "Our Property Law services ensure smooth and secure transactions:\n\n🏠 Residential Conveyancing\n🏢 Commercial Property\n⚖️ Property Disputes\n🏗️ Development & Planning\n📋 Lease Agreements\n💼 Property Investment Advice\n🔍 Title Searches & Due Diligence\n\nWhether you're buying your first home or expanding your property portfolio, we provide:\n\n✅ Fixed-fee conveyancing from $800\n✅ Same-day contract reviews\n✅ Electronic settlement capability\n✅ Comprehensive title insurance",
    quickReplies: ["Conveyancing quote", "Property dispute help", "Commercial property", "First home buyer info", "Back to practice areas"]
  },
  
  "Criminal Law": {
    text: "Our Criminal Law experts provide strong defense and representation:\n\n⚖️ Court Representation\n🚔 Police Interview Rights\n📋 Bail Applications\n🛡️ Appeals & Reviews\n💼 Traffic Offenses\n🏛️ Serious Criminal Charges\n📞 24/7 Emergency Response\n\n🚨 REMEMBER YOUR RIGHTS:\n• Right to remain silent\n• Right to legal representation\n• Right to contact a lawyer before questioning\n\n✅ Available 24/7 for arrests\n✅ Experienced in all Victorian courts\n✅ Strong track record of successful defenses",
    quickReplies: ["Emergency criminal help", "Traffic offense help", "Court representation", "Know your rights", "Back to practice areas"]
  },
  
  "Commercial Law": {
    text: "Our Commercial Law team supports businesses of all sizes:\n\n📋 Contract Drafting & Review\n🤝 Business Partnerships\n💼 Employment Law\n🏢 Corporate Governance\n⚖️ Commercial Disputes\n💰 Debt Recovery\n🛡️ Intellectual Property\n📊 Compliance & Regulatory\n\nWe help businesses:\n\n✅ Minimize legal risks\n✅ Draft bulletproof contracts\n✅ Resolve disputes efficiently\n✅ Ensure regulatory compliance\n\nFrom startups to established enterprises, we're your legal partner.",
    quickReplies: ["Contract review", "Business dispute", "Employment law", "Startup legal help", "Back to practice areas"]
  },
  
  "Civil Litigation": {
    text: "Our Civil Litigation team fights for your rights in:\n\n⚖️ Personal Injury Claims\n🏠 Property Disputes\n💼 Contract Disputes\n💰 Debt Recovery\n🏗️ Building & Construction\n🚗 Motor Vehicle Accidents\n📋 Professional Negligence\n🏛️ VCAT Proceedings\n\nWe offer:\n\n✅ No Win, No Fee arrangements*\n✅ Experienced court advocates\n✅ Alternative dispute resolution\n✅ Comprehensive case management\n\n*Conditions apply - ask about our fee arrangements",
    quickReplies: ["Personal injury claim", "Property dispute", "No win no fee info", "VCAT help", "Back to practice areas"]
  },
  
  "Wills & Estates": {
    text: "Protect your family's future with our Estate Planning services:\n\n📜 Will Preparation\n👥 Estate Administration\n⚖️ Probate Applications\n🏠 Estate Disputes\n💼 Power of Attorney\n🏥 Advance Care Directives\n💰 Trust Establishment\n📋 Estate Planning Reviews\n\nDon't leave your loved ones uncertain:\n\n✅ Simple wills from $200\n✅ Complex estate planning available\n✅ Regular review reminders\n✅ Secure document storage\n\nEstate planning isn't just for the wealthy - everyone needs a will.",
    quickReplies: ["Simple will", "Complex estate planning", "Probate help", "Power of attorney", "Back to practice areas"]
  },
  
  // Action responses with proper functionality
  "Book online now": {
    text: "Perfect! I'm opening our contact page where you can book your FREE 30-minute consultation online. You'll be able to:\n\n✅ Select your preferred date and time\n✅ Choose your practice area\n✅ Provide details about your legal matter\n✅ Get immediate confirmation\n\nThe page will open in a new tab in just a moment...",
    action: "redirect_contact",
    quickReplies: ["Call instead", "Email instead", "Back to main menu"]
  },
  
  "Call to book": {
    text: "Great choice! I'm connecting you to our office now.\n\n📞 Calling: (03) 9123 4567\n\nOur friendly staff will:\n✅ Schedule your FREE consultation\n✅ Answer any immediate questions\n✅ Send you confirmation details\n\nOffice hours: Monday-Friday 8:30am-6:00pm\nEmergency line available 24/7",
    action: "call_phone",
    quickReplies: ["Book online instead", "Email instead", "Back to main menu"]
  },
  
  "Email to book": {
    text: "Perfect! Opening your email client now...\n\n📧 To: info@nasihahlegal.com.au\n📝 Subject: Legal Consultation Request\n\nYour email client should open with a pre-filled template including:\n✅ Consultation booking request\n✅ Fields for your preferred date/time\n✅ Space for legal matter details\n✅ Contact information section\n\nIf your email client doesn't open automatically, please email us directly at: info@nasihahlegal.com.au\n\nWe typically respond within 2 hours during business hours.",
    action: "send_email",
    quickReplies: ["Call instead", "Book online instead", "Back to main menu"]
  },
  
  "Call now": {
    text: "I'm connecting you to our office now.\n\n📞 Calling: (03) 9123 4567\n\nOur team is ready to help with:\n✅ Immediate legal questions\n✅ Consultation booking\n✅ Emergency matters\n✅ General information\n\nIf calling after hours, you'll reach our 24/7 emergency line.",
    action: "call_phone",
    quickReplies: ["Book online", "Send email", "Back to main menu"]
  },
  
  "Send email": {
    text: "Perfect! Opening your email client now...\n\n📧 To: info@nasihahlegal.com.au\n📝 Subject: General Legal Inquiry\n\nYour email client should open with a pre-filled template for:\n✅ General legal inquiries\n✅ Consultation requests\n✅ Document requests\n✅ Case updates\n\nIf your email client doesn't open automatically, please email us directly at: info@nasihahlegal.com.au\n\nWe typically respond within 2 hours during business hours.",
    action: "send_email",
    quickReplies: ["Call instead", "Book online", "Back to main menu"]
  },
  
  "Get directions": {
    text: "I'm opening directions to our office.\n\n📍 Nasihah Legal\n123 Sydney Road, Coburg VIC 3058\n\n🚗 Free parking available\n🚌 Near public transport\n♿ Wheelchair accessible\n\nLandmarks:\n• Near Coburg Station\n• Opposite Coburg Mall\n• Next to ANZ Bank",
    action: "get_directions",
    quickReplies: ["Call for directions", "Book consultation", "Back to main menu"]
  },
  
  "Emergency consultation": {
    text: "For urgent legal matters, we provide 24/7 emergency consultations:\n\n🚨 CALL IMMEDIATELY for:\n• Criminal arrests or police questioning\n• Court deadlines within 24-48 hours\n• Domestic violence situations\n• Business closure threats\n• Urgent injunction needs\n\n📞 Emergency Line: (03) 9123 4567 (Press 1)\n\nNote: Emergency consultation fees may apply.",
    quickReplies: ["Call emergency line", "What constitutes emergency", "Regular consultation", "Back to main menu"]
  },
  
  "Call emergency line": {
    text: "I'm connecting you to our 24/7 emergency line now.\n\n🚨 Calling Emergency Line: (03) 9123 4567\n\nWhen connected, press 1 for emergency legal assistance.\n\nOur emergency team handles:\n✅ Criminal law emergencies\n✅ Urgent court matters\n✅ Time-sensitive legal issues\n✅ After-hours consultations",
    action: "call_emergency",
    quickReplies: ["Regular consultation", "Back to main menu"]
  },
  
  // Navigation responses
  "Back to main menu": {
    text: "How can I help you today? Please select an option:",
    quickReplies: [
      "I need legal advice",
      "Book a consultation", 
      "Practice areas",
      "Contact information",
      "Office hours",
      "Fees & pricing"
    ]
  },
  
  "Back to practice areas": {
    text: "Which practice area would you like to know more about?",
    quickReplies: ["Family Law", "Property Law", "Criminal Law", "Commercial Law", "Civil Litigation", "Wills & Estates", "Back to main menu"]
  },
  
  // Detailed service responses
  "Free consultation": {
    text: "Our FREE 30-minute initial consultation includes:\n\n✅ Assessment of your legal matter\n✅ Explanation of your options\n✅ Clear advice on next steps\n✅ Transparent fee estimate\n✅ No obligation to proceed\n\nAvailable Monday-Friday 8:30am-6:00pm\nEmergency consultations available 24/7",
    quickReplies: ["Book free consultation", "Call to book", "Email to book", "Back to main menu"]
  },
  
  "No win no fee info": {
    text: "Our No Win, No Fee arrangements are available for:\n\n✅ Personal injury claims\n✅ Some employment disputes\n✅ Certain contract disputes\n✅ Selected family law matters\n\n📋 How it works:\n• No legal fees if we don't win\n• You only pay if successful\n• Detailed terms explained upfront\n• Success fee applies if we win\n\n*Conditions apply - other costs may still apply",
    quickReplies: ["Book consultation", "Get more details", "Call to discuss", "Back to main menu"]
  },
  
  "Payment plans": {
    text: "We offer flexible payment options:\n\n💳 Payment Plans Available:\n• Weekly payment arrangements\n• Monthly payment schedules\n• Staged payments for major matters\n• Interest-free options available\n\n💰 Payment Methods:\n• Credit/Debit cards\n• Bank transfers\n• Direct debit\n• Cash payments accepted\n\nWe'll work with you to find a suitable arrangement.",
    quickReplies: ["Discuss payment options", "Book consultation", "Call to arrange", "Back to main menu"]
  }
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext>({
    userInterests: [],
    hasAskedForConsultation: false,
    currentTopic: null,
    lastBotResponse: null,
    responseCount: 0
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

  const handleQuickReply = (reply: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate realistic bot typing delay
    const typingDelay = Math.min(reply.length * 30 + 800, 2000);
    
    setTimeout(() => {
      const botResponse = botResponses[reply] || {
        text: "I'm sorry, I didn't understand that option. Let me show you the main menu again:",
        quickReplies: [
          "I need legal advice",
          "Book a consultation",
          "Practice areas", 
          "Contact information",
          "Office hours",
          "Fees & pricing"
        ]
      };

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse.text,
        isBot: true,
        timestamp: new Date(),
        quickReplies: botResponse.quickReplies,
        hasLinks: botResponse.text.includes('http') || !!botResponse.action
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // Handle actions
      if (botResponse.action) {
        setTimeout(() => {
          switch (botResponse.action) {
            case 'redirect_contact':
              window.open('/contact', '_blank');
              break;
            case 'call_phone':
              window.open('tel:0391234567', '_self');
              break;
            case 'call_emergency':
              window.open('tel:0391234567', '_self');
              break;
            case 'send_email':
              // Different email templates based on context
              try {
                let subject, body;
                if (reply.includes('book') || reply.includes('Book')) {
                  subject = 'Legal Consultation Request';
                  body = `Hello,

I would like to book a FREE 30-minute consultation.

Please contact me to arrange a suitable time.

Preferred date/time: 
Type of legal matter: 
My contact details: 
Any urgent concerns: 

Thank you`;
                } else {
                  subject = 'General Legal Inquiry';
                  body = `Hello,

I have a legal inquiry and would appreciate your assistance.

Please contact me at your earliest convenience.

Details of my inquiry: 
My contact details: 

Thank you`;
                }

                // Create the mailto URL with proper encoding
                const mailtoUrl = `mailto:info@nasihahlegal.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                console.log('Opening email with URL:', mailtoUrl);
                
                // Use location.href for better compatibility
                window.location.href = mailtoUrl;
                
                console.log('Email client should have opened');
              } catch (error) {
                console.error('Error opening email client:', error);
                // Show fallback message with copy-to-clipboard functionality
                const fallbackMessage = `Please email us directly at: info@nasihahlegal.com.au\n\nOr copy this email address to your clipboard and compose your email manually.`;
                
                // Try to copy email to clipboard
                if (navigator.clipboard) {
                  navigator.clipboard.writeText('info@nasihahlegal.com.au').then(() => {
                    alert('Email address copied to clipboard!\n\ninfo@nasihahlegal.com.au');
                  }).catch(() => {
                    alert(fallbackMessage);
                  });
                } else {
                  alert(fallbackMessage);
                }
              }
              break;
            case 'get_directions':
              window.open('https://maps.google.com/?q=123+Sydney+Road,+Coburg+VIC+3058', '_blank');
              break;
          }
        }, 1000);
      }

      // Update context
      setContext(prev => ({
        ...prev,
        currentTopic: reply,
        userInterests: Array.from(new Set([...prev.userInterests, reply])),
        hasAskedForConsultation: reply.includes('consultation') || reply.includes('book'),
        lastBotResponse: reply,
        responseCount: prev.lastBotResponse === reply ? prev.responseCount + 1 : 1
      }));
    }, typingDelay);
  };

  const clearChat = () => {
    setMessages(initialMessages);
    setContext({
      userInterests: [],
      hasAskedForConsultation: false,
      currentTopic: null,
      lastBotResponse: null,
      responseCount: 0
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

            {/* Footer with Quick Actions - No Text Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="text-center mb-3">
                <p className="text-xs text-gray-600 mb-2">Quick Actions:</p>
                <div className="flex justify-center gap-4 text-xs">
                  <button 
                    onClick={() => handleQuickReply("Call now")}
                    className="text-primary-dark hover:text-accent-gold hover:underline flex items-center gap-1 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    Call Now
                  </button>
                  <button 
                    onClick={() => handleQuickReply("Book online now")}
                    className="text-primary-dark hover:text-accent-gold hover:underline flex items-center gap-1 transition-colors"
                  >
                    <Calendar className="w-3 h-3" />
                    Book Online
                  </button>
                  <button 
                    onClick={() => handleQuickReply("Send email")}
                    className="text-primary-dark hover:text-accent-gold hover:underline flex items-center gap-1 transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    Email
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => handleQuickReply("Back to main menu")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                >
                  🏠 Main Menu
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 