import React, { Fragment } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import '../../../assets/css/chatbot.css';

import chatbotConfig from './configs/chatbotConfig';
import ActionProvider from './configs/ActionProvider';
import MessageParser from './configs/MessageParser';

const ChatBox = ({ isChatBoxOpen, closeChatBox }) => {
  return (
    <Fragment>
      {isChatBoxOpen && (
        <Chatbot
          config={chatbotConfig(closeChatBox)}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="Send a message..."
        />
      )}
    </Fragment>
  );
};

export default ChatBox;
