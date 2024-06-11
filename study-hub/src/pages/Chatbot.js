import React, { useState } from 'react';
import { sendMessageToChatbot } from '../services/apiService';
import TopMenu2 from "../components/TopMenu2";
import abstract from "../assets/abstract.webp";  // Import the background image
import aiAvatar from "../assets/aiavatar.webp";  // Import the AI avatar image

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { sender: 'AI Chatbot', text: 'Hello! Lets learn new languages together! Ask me!' }
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
            setChatHistory([...newChatHistory, { sender: 'AI Chatbot', text: 'Error communicating with chatbot :(' }]);
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
        backgroundColor: '#FFFFFF', // Adjusted color
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
        backgroundColor: '#d93030',
        padding: '12px',
        borderRadius: '30px'
    };

    const avatarStyle = (color) => ({
        backgroundColor: color,
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#d93030',
        fontWeight: 'bold'
    });

    const messageStyle = {
        marginLeft: '16px',
        padding: '12px',
        backgroundColor: 'rgba(238, 238, 238, 0.1)',
        borderRadius: '30px',
        flex: 1,
        textAlign: 'left',
        color: 'white'
    };

    const chatInputHolderStyle = {
        padding: '24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #EEEEEE',
    };

    const chatInputStyle = {
        backgroundColor: '#EEEEEE',
        padding: '12px',
        color: 'black',  // Set text color to black
        fontSize: '1.25em',
        width: '100%',
        borderRadius: '30px',
        border: 'none',
        outline: 'none',
        resize: 'none',
        marginRight: '10px',
        marginBottom: 0,
    };

    const sendButtonStyle = {
        backgroundColor: '#d93030',
        marginBottom: 0,
        border: 'none',
        borderRadius: '50%',
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

export default Chatbot;
