import React, { Fragment, useState } from 'react';
import ChatBox from './ChatBox';

const ContactUs = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  return (
    <Fragment>
      <ChatBox
        isChatBoxOpen={isChatBoxOpen}
        closeChatBox={() => setIsChatBoxOpen(false)}
      />
      <img
        className="floating-button"
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
