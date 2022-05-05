import React, { Fragment, useState } from 'react';
import ChatBox from './ChatBox';

const ContactUs = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('chat_messages');
  });

  return (
    <Fragment>
      <ChatBox
        isChatBoxOpen={isChatBoxOpen}
        closeChatBox={() => setIsChatBoxOpen(false)}
      />
      <img
        className="z-50 cursor-pointer fixed bottom-0 right-0 mb-4 mr-6 w-[50px] md:mb-7 md:mr-[2rem] lg:w-[4.5rem] lg:mb-7"
        onClick={() => setIsChatBoxOpen(!isChatBoxOpen)}
        src={
          isChatBoxOpen
            ? '/images/CloseFloatingButton.svg'
            : '/images/ChatFloatingButton.svg'
        }
        alt="chat floating button"
      />
    </Fragment>
  );
};

export default ContactUs;
