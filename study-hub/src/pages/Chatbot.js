import React, { useState } from 'react';
import { sendMessageToChatbot } from '../services/apiService';

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

    const chatContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden'
    };

    const chatHeaderStyle = {
        backgroundColor: '#EF5350',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontSize: '24px'
    };

    const chatBodyStyle = {
        flex: 1,
        padding: '10px',
        overflowY: 'auto',
        backgroundColor: '#f9f9f9'
    };

    const chatMessageStyle = {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '80%'
    };

    const userMessageStyle = {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end'
    };

    const botMessageStyle = {
        backgroundColor: '#FFFFFF',
        border: '1px solid #ccc'
    };

    const chatSenderStyle = {
        fontWeight: 'bold',
        marginBottom: '5px'
    };

    const chatInputContainerStyle = {
        display: 'flex',
        padding: '10px',
        borderTop: '1px solid #ccc'
    };

    const chatInputStyle = {
        flex: 1,
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '20px',
        outline: 'none'
    };

    const chatSendButtonStyle = {
        backgroundColor: '#EF5350',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        marginLeft: '10px',
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
        <div style={chatContainerStyle}>
            <div style={chatHeaderStyle}>StudyHub</div>
            <div style={chatBodyStyle}>
                {chatHistory.map((chat, index) => (
                    <div
                        key={index}
                        style={{
                            ...chatMessageStyle,
                            ...(chat.sender === 'You' ? userMessageStyle : botMessageStyle)
                        }}
                    >
                        <div style={chatSenderStyle}>{chat.sender}</div>
                        <div>{chat.text}</div>
                    </div>
                ))}
            </div>
            <div style={chatInputContainerStyle}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me anything..."
                    style={chatInputStyle}
                />
                <button onClick={sendMessage} style={chatSendButtonStyle}>
                    <svg style={sendIconStyle} viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
