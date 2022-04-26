import React, { Fragment, useState } from 'react';
import ChatBox from './chatBox';

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <ChatBox isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <img
        className={isOpen ? 'hidden' : 'floating-button'}
        onClick={() => setIsOpen(true)}
        src="/images/ChatFloatingButton.svg"
        alt="chat floating button"
      />
      <img
        className={isOpen ? 'floating-button' : 'hidden'}
        onClick={() => setIsOpen(false)}
        src="/images/CloseFloatingButton.svg"
        alt="chat floating button"
      />
    </Fragment>
  );
};

export default ContactUs;
