import React, { useState } from 'react';
import { sendMessageToChatbot } from '../services/apiService';
import TopMenu2 from "../components/TopMenu2";
import abstract from "../assets/abstract.webp";  // Import the image

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { sender: 'AI Chatbot', text: 'Hello! Feel free to ask me any questions that you are curious about.' }
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
        backgroundImage: `url(${abstract})`,  // Set the background image
        backgroundSize: 'cover',  // Ensure the image covers the entire side menu
        backgroundPosition: 'center',  // Center the image
        color: 'white'  // Ensure the text is readable on the image
    };

   

    const chatboxStyle = {
        flex: 1,
        border: '1px solid white',
        backgroundColor: '#D03D18',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    };

    const chatLogStyle = {
        flex: 1,
        overflowY: 'auto',
        padding: '20px'
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
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '12px',
        borderRadius: '8px'
    };

    const avatarStyle = (color) => ({
        backgroundColor: color,
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold'
    });

    const messageStyle = {
        marginLeft: '16px',
        padding: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '5px',
        flex: 1,
        textAlign: 'left',
        color: 'white'
    };

    const chatInputHolderStyle = {
        padding: '24px',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center'
    };

    const chatInputStyle = {
        backgroundColor: '#40414f',
        padding: '12px',
        color: 'white',
        fontSize: '1.25em',
        width: '100%',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
        resize: 'none',
        marginRight: '10px'
    };

    const sendButtonStyle = {
        backgroundColor: '#EF5350',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
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
                    
                </aside>
                <section style={chatboxStyle}>
                    <div style={chatLogStyle}>
                        {chatHistory.map((chat, index) => (
                            <div key={index} style={chatMessageStyle}>
                                <div style={chatMessageCenterStyle}>
                                    <div style={avatarStyle(chat.sender === 'You' ? 'red' : 'blue')}>
                                        {chat.sender[0]}
                                    </div>
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
                            placeholder="Ask me anything..."
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
