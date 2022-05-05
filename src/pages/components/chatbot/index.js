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
        className="z-50 cursor-pointer fixed bottom-0 right-0 mb-3 mr-6 w-[50px] md:mb-6 md:mr-[3.5rem] lg:w-[4.5rem] lg:my-4"
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
