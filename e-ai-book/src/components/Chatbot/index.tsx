import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import { useDocsData } from '@docusaurus/plugin-content-docs/client'; 

import './Chatbot.css'; 

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const location = useLocation();
  const allDocsData = useDocsData(); 
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial greeting when chatbot opens
    if (isOpen && messages.length === 0) {
      setMessages([
        { text: "Hello! I'm your VLA Mentor Assistant.", sender: 'bot' },
        { text: `You are currently viewing: ${getCurrentChapterTitle()}`, sender: 'bot' },
        { text: "How can I help you today?", sender: 'bot' },
      ]);
    }
  }, [isOpen]); // Only run once when isOpen changes to true and messages are empty

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const getCurrentChapterTitle = () => {
    const pathname = location.pathname;

    for (const pluginId in allDocsData) {
      if (allDocsData[pluginId].version) {
        for (const versionKey in allDocsData[pluginId].version) {
          const version = allDocsData[pluginId].version[versionKey];
          if (version.docs) {
            for (const docId in version.docs) {
              const doc = version.docs[docId];
              if (doc.permalink === pathname || pathname.startsWith(doc.permalink + '/')) {
                return doc.title;
              }
            }
          }
        }
      }
    }
    return "Unknown Chapter";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newUserMessage: ChatMessage = { text: inputMessage, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInputMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse: ChatMessage = {
          text: "I'm currently a placeholder VLA Mentor Assistant and cannot process complex requests yet. How else can I help you with this chapter?",
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000); // Simulate network delay
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        🤖
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>VLA Mentor Assistant</span>
            <button className="chatbot-close-button" onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <p key={index} className={`chat-message ${msg.sender}`}>
                <strong>{msg.sender === 'user' ? 'You' : 'Mentor'}:</strong> {msg.text}
              </p>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Ask a question..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;