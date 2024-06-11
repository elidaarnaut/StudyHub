import React, { useState } from 'react';
import { sendMessageToChatbot } from '../services/apiService';
import TopMenu2 from "../components/TopMenu2";
import abstract from "../assets/abstract1.webp";  
import aiAvatar from "../assets/aiavatar.webp";  

const TestsPage = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
      
        { sender: 'AI Chatbot', text: 'Write about a day you visited a garden to look at plants and animals. What did you see? What did you like the most?' }
    ]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const newChatHistory = [...chatHistory, { sender: 'You', text: message }];
        setChatHistory(newChatHistory);
        setMessage('');

        try {
            const res = await sendMessageToChatbot(message);
            setChatHistory([...newChatHistory, { sender: 'AI Chatbot', text: res.reply }]);
        } catch (error) {
            console.error('Error communicating with chatbot:', error);
            setChatHistory([...newChatHistory, { sender: 'AI Chatbot', text: 'Error communicating with chatbot' }]);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const containerStyle = {
        display: 'flex',
        backgroundColor: '#282c34',
        color: 'white',
        position: 'absolute',
        top: '60px',
        bottom: 0,
        left: 0,
        right: 0
    };

    const sideMenuStyle = {
        width: '240px',
        padding: '10px',
        backgroundColor: '#202123',
        backgroundImage: `url(${abstract})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
    };

    const chatboxStyle = {
        flex: 1,
        border: '1px solid white',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    };

    const chatLogStyle = {
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        scrollbarWidth: 'thin', // For Firefox
        scrollbarColor: 'gray white' // For Firefox
    };

    const chatMessageStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px'
    };

    const chatMessageCenterStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f8d7da',
        padding: '12px',
        borderRadius: '5px'
    };

    const avatarStyle = (color) => ({
        backgroundColor: color,
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#023047',
        fontWeight: 'bold'
    });

    const messageStyle = {
        marginLeft: '16px',
        padding: '12px',
        backgroundColor: '#f8d7da',
        borderRadius: '5px',
        flex: 1,
        textAlign: 'left',
        color: 'black'
    };

    const chatInputHolderStyle = {
        padding: '24px',
        position: 'relative',
        borderRadius: '5px',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #EEEEEE'
    };

    const chatInputStyle = {
        backgroundColor: '#EEEEEE',
        padding: '12px',
        color: '#023047',
        fontSize: '1.25em',
        width: '100%',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
        resize: 'none',
        marginRight: '10px'
    };

    const sendButtonStyle = {
        backgroundColor: '#023047',
        border: 'none',
        borderRadius: '5%',
        padding: '14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const sendIconStyle = {
        fill: 'white',
        width: '24px',
        height: '24px'
    };

    return (
        <>
            <TopMenu2 />
            <div style={containerStyle}>
                <aside style={sideMenuStyle}>
                    {/* Side menu content */}
                </aside>
                <section style={chatboxStyle}>
                    <div style={chatLogStyle}>
                        {chatHistory.map((chat, index) => (
                            <div key={index} style={chatMessageStyle}>
                                <div style={chatMessageCenterStyle}>
                                    {chat.sender === 'AI Chatbot' ? (
                                        <img src={aiAvatar} alt="AI Avatar" style={{ borderRadius: '50%', width: '40px', height: '40px' }} />
                                    ) : (
                                        <div style={avatarStyle('#EEEEEE')}>{chat.sender[0]}</div>
                                    )}
                                    <div style={messageStyle}>{chat.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={chatInputHolderStyle}>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress} // Added event handler for Enter key
                            style={chatInputStyle}
                        />
                        <button onClick={sendMessage} style={sendButtonStyle}>
                            <svg style={sendIconStyle} viewBox="0 0 24 24">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TestsPage;
