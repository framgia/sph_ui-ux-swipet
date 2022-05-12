import React, { Fragment, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import '../../../assets/css/chatbot.css';

import chatbotConfig from './configs/chatbotConfig';
import ActionProvider from './configs/ActionProvider';
import MessageParser from './configs/MessageParser';

const ContactUs = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('chat_messages');
  });

  const closeChatBox = () => setIsChatBoxOpen(false);

  const validateInput = (input) =>
    !input || input.trim().length === 0 ? false : true;

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
          placeholderText='Send a message...'
          validator={validateInput}
        />
      )}

      <img
        className='z-50 cursor-pointer fixed bottom-0 right-0 mb-4 mr-6 w-[50px] md:mb-7 md:mr-[2rem] lg:w-[4.5rem] lg:mb-7'
        onClick={() => setIsChatBoxOpen(!isChatBoxOpen)}
        src={
          isChatBoxOpen
            ? '/images/CloseFloatingButton.svg'
            : '/images/ChatFloatingButton.svg'
        }
        alt='chat floating button'
      />
    </Fragment>
  );
};

export default ContactUs;
