import React, { Fragment } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import '../../../assets/css/chatbot.css';

import chatbotConfig from './configs/chatbotConfig';
import ActionProvider from './configs/ActionProvider';
import MessageParser from './configs/MessageParser';

const ChatBox = ({ isChatBoxOpen, closeChatBox }) => {
  //Does not execute
  const saveMessages = (messages, HTMLString) => {
    console.log('save messages');

    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));

    return messages;
  };

  return (
    <Fragment>
      {isChatBoxOpen && (
        <Chatbot
          config={chatbotConfig(closeChatBox)}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          placeholderText="Send a message..."
          saveMessages={saveMessages}
        />
      )}
    </Fragment>
  );
};

export default ChatBox;
