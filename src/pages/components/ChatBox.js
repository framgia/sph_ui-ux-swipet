import React, { Fragment, useState } from 'react';
import CloseIcon from './icons/CloseIcon';

const ChatBox = ({ isChatBoxOpen, closeChatBox }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'chatbot', text: 'Hi, how can I help you?' },
    { sender: 'user', text: 'Is this application free to use?' },
  ]);

  const onMessageSend = (e) => {
    e.preventDefault();

    if (newMessage) {
      setMessages([...messages, { sender: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };

  const onMessageValueChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div
      className={
        isChatBoxOpen
          ? 'z-50 fixed bottom-0 right-0 mb-[5rem] mr-6 w-80 md:mb-[5.5rem] md:mr-[3.5rem] lg:mb-[6.5rem] border md:w-96 lg:w-96 rounded-lg shadow-md'
          : 'hidden'
      }
    >
      <div className="h-16 w-100 flex justify-between items-center bg-gradient-to-b from-sky-900 via-sky-700 to-mocha-500 rounded-t-lg px-3">
        <img
          className="rounded-full w-10"
          src="/images/RoundOrangeLogo.svg"
          alt="logo"
        />
        <CloseIcon closeChatBox={closeChatBox} />
      </div>
      <div className="bg-white h-[23rem] p-3 flex flex-col gap-4 overflow-auto overflow-x-hidden">
        {messages.map((message, idx) => {
          return (
            <Fragment key={idx}>
              {message.sender === 'chatbot' ? (
                <div className="flex items-center">
                  <img
                    className="border rounded-full w-10 h-10 mr-2"
                    src="/images/ChatbotAvatar.svg"
                    alt="chatbot avatar"
                  />
                  <span className="bg-mocha-400 chat-bubble">
                    {message.text}
                  </span>
                </div>
              ) : (
                <div className="flex justify-end items-center float-right">
                  <span className="bg-orange-300 chat-bubble">
                    {message.text}
                  </span>
                  <img
                    className="border rounded-full w-10 h-10"
                    src="/images/UserAvatar.svg"
                    alt="user avatar"
                  />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      <form onSubmit={onMessageSend} className="bg-white relative border-t p-3 rounded-b-md">
        <input
          type="text"
          className="border w-full text-xs rounded-lg p-3 pr-11 bg-stone-100"
          placeholder="Send a message..."
          value={newMessage}
          onChange={onMessageValueChange}
        />
        <button type="submit">
          <img
            className="absolute inset-y-5 right-6"
            src="/images/SendIcon.svg"
            alt="paper plane send icon"
          />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
