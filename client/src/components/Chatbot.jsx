import { useState, useRef, useEffect } from 'react';
import '../styles/chatbot.css'; // Import the CSS file for styling

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', message: 'Hi! How can I help you today?' },
  ]);
  const [isMinimized, setIsMinimized] = useState(true);

  const chatHistoryEndRef = useRef(null);

  // Handle user input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    setChatHistory([...chatHistory, { sender: 'user', message: userInput }]);

    // Send user input to Flask backend
    const response = await fetch('http://127.0.0.1:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();

    // Add bot response to chat history
    setChatHistory([
      ...chatHistory,
      { sender: 'user', message: userInput },
      { sender: 'bot', message: data.response },
    ]);

    // Clear input field
    setUserInput('');
  };

  // Toggle minimized state
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatHistoryEndRef.current) {
      chatHistoryEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]); // Run the effect whenever chatHistory changes

  return (
    <div className={`chat-container ${isMinimized ? 'minimized' : ''}`}>
      {isMinimized && (
        <div className='chat-bubble' onClick={toggleMinimize}>
          <span>Chat Now</span>
        </div>
      )}

      <div className={`chat-box`}>
        {/* Chat Header with Conditional Class */}
        <div
          className={`chat-header ${
            isMinimized ? 'minimized-header' : 'expanded-header'
          }`}
        >
          <span>{isMinimized ? '' : 'Chatbot by Siddharth'}</span>
          <div>
            {isMinimized ? (
              <button onClick={toggleMinimize} className='maximize-btn'>
                <ion-icon name='chatbubble-outline'></ion-icon>
              </button>
            ) : (
              <button onClick={toggleMinimize} className='minimize-btn'>
                x
              </button>
            )}
          </div>
        </div>

        {/* Chat History */}
        {!isMinimized && (
          <div className='chat-history'>
            {chatHistory.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <div className='message'>{msg.message}</div>
              </div>
            ))}
            <div ref={chatHistoryEndRef} />
          </div>
        )}

        {/* Input Field */}
        {!isMinimized && (
          <form className='chat-input' onSubmit={handleSubmit}>
            <input
              type='text'
              value={userInput}
              onChange={handleInputChange}
              placeholder='Type your message...'
              autoFocus
            />
            <button type='submit' className='send-button'>
              <ion-icon name='send-outline'></ion-icon>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
