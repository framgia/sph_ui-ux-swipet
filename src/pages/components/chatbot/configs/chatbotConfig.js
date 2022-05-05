import { createChatBotMessage } from 'react-chatbot-kit';
import CloseIcon from '../../../components/icons/CloseIcon';
import Topics from '../widgets/Topics';
import Requirements from '../widgets/Requirements';
import Process from '../widgets/Process';

const config = (closeChatBox) => {
  return {
    initialMessages: [
      createChatBotMessage("Hi, I'm Swipet Assistant"),
      createChatBotMessage(
        'How may I help you? Below list are the topics I can help you with.',
        {
          withAvatar: true,
          delay: 700,
          widget: 'options',
        },
      ),
    ],
    customComponents: {
      header: () => (
        <div className="h-16 w-100 flex justify-between items-center bg-gradient-to-b from-sky-900 via-sky-700 to-mocha-500 rounded-t-lg px-3">
          <img
            className="rounded-full w-10"
            src="/images/RoundOrangeLogo.svg"
            alt="logo"
          />
          <CloseIcon closeChatBox={closeChatBox} />
        </div>
      ),
      botAvatar: () => (
        <img
          className="border rounded-full w-10 h-10"
          src="/images/ChatbotAvatar.svg"
          alt="chatbot avatar"
        />
      ),

      userAvatar: () => (
        <img
          className="border rounded-full w-10 h-10"
          src="/images/UserAvatar.svg"
          alt="user avatar"
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
