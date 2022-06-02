import {
  showOptionKeywords,
  adoptionProcessKeywords,
  paperworkKeywords,
  requirementKeywords,
} from '../../../../utilities/constants';

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const userMessages = this.state.messages;

    userMessages.push({
      id: Math.floor(Math.random() * 100),
      message,
      type: 'user',
    });

    message.toLowerCase();

    localStorage.setItem('chat_messages', JSON.stringify(userMessages));

    if (showOptionKeywords.some((i) => message.includes(i))) {
      return this.actionProvider.showOptions();
    }

    if (adoptionProcessKeywords.some((i) => message.includes(i))) {
      return this.actionProvider.handleAdoptionProcessReply();
    }

    if (paperworkKeywords.some((i) => message.includes(i))) {
      return this.actionProvider.handlePaperworksReply();
    }

    if (requirementKeywords.some((i) => message.includes(i))) {
      return this.actionProvider.handleRequirementsReply();
    }

    return this.actionProvider.handleUnkownKeywords();
  }
}

export default MessageParser;
