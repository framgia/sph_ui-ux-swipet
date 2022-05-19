import React, { Fragment, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import '../../../assets/css/chatbot.css';

import chatbotConfig from './configs/chatbotConfig';
import ActionProvider from './configs/ActionProvider';
import MessageParser from './configs/MessageParser';

const ContactUs = ({ mode }) => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('chat_messages');
  });

  const closeChatBox = () => setIsChatBoxOpen(false);

  const validateInput = (input) => !(!input || input.trim().length === 0);

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));

    return messages;
  };

  const chatBoxIcon = () => {
    if (mode === 'light') {
      if (isChatBoxOpen) {
        return '/images/CloseFloatingButton.svg';
      }
      return '/images/ChatFloatingButton.svg';
    }
    if (isChatBoxOpen) {
      return '/images/CloseFloatingButtonDark.svg';
    }
    return '/images/ChatFloatingButtonDark.svg';
  };

  return (
    <Fragment>
      {isChatBoxOpen && (
        <Chatbot
          config={chatbotConfig(closeChatBox, mode)}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          placeholderText='Send a message...'
          validator={validateInput}
        />
      )}
      <LazyLoadImage
        className='fixed bottom-0 right-0 z-50 mb-4 mr-6 w-[50px] cursor-pointer md:mb-7 md:mr-[2rem] lg:mb-7 lg:w-[4.5rem]'
        onClick={() => setIsChatBoxOpen(!isChatBoxOpen)}
        src={`${chatBoxIcon()}`}
        alt='chat floating button'
      />
    </Fragment>
  );
};

export default ContactUs;
