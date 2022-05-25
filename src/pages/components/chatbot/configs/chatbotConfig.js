import { createChatBotMessage } from 'react-chatbot-kit';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CloseIcon from '../../icons/CloseIcon';
import Topics from '../widgets/Topics';
import Requirements from '../widgets/Requirements';
import Process from '../widgets/Process';

const config = (closeChatBox) => {
  const initialMessages = [
    createChatBotMessage("Hi, I'm Swipet Assistant"),
    createChatBotMessage('How may I help you? Below list are the topics I can help you with.', {
      withAvatar: true,
      delay: 700,
      widget: 'options',
    }),
  ];

  const messages = JSON.parse(localStorage.getItem('chat_messages'));

  if (!messages) {
    localStorage.setItem('chat_messages', JSON.stringify(initialMessages));
  }

  return {
    initialMessages,
    customComponents: {
      header: () => (
        <div className='w-100 flex h-16 items-center justify-between rounded-t-lg bg-gradient-to-b from-sky-900 via-sky-700 to-mocha-500 px-3 dark:bg-dark-ash-900 dark:bg-none'>
          <LazyLoadImage
            className='w-10 rounded-full'
            src='/images/RoundOrangeLogo.svg'
            alt='logo'
          />
          <CloseIcon closeChatBox={closeChatBox} />
        </div>
      ),
      botAvatar: () => (
        <LazyLoadImage
          className='h-10 w-10 rounded-full border'
          src='/images/ChatbotAvatar.svg'
          alt='chatbot avatar'
        />
      ),

      userAvatar: () => (
        <LazyLoadImage
          className='h-10 w-10 rounded-full border'
          src='/images/UserAvatar.svg'
          alt='user avatar'
        />
      ),
    },
    widgets: [
      {
        widgetName: 'options',
        widgetFunc: (props) => <Topics {...props} />,
        mapStateToProps: ['messages'],
      },
      {
        widgetName: 'requirements',
        widgetFunc: (props) => <Requirements {...props} />,
      },
      {
        widgetName: 'process',
        widgetFunc: (props) => <Process {...props} />,
      },
    ],
  };
};

export default config;
