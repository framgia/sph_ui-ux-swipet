class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const messages = this.state.messages;

    messages.push({
      id: Math.floor(Math.random() * 100),
      message,
      type: 'user',
    });

    message = message.toLowerCase();

    localStorage.setItem('chat_messages', JSON.stringify(messages));

    if (
      message.includes('options') ||
      message.includes('help') ||
      message.includes('question') ||
      message.includes('do for me')
    ) {
      return this.actionProvider.showOptions();
    }

    if (message.includes('adopt') || message.includes('process')) {
      return this.actionProvider.handleAdoptionProcessReply();
    }

    if (message.includes('paperwork') || message.includes('document')) {
      return this.actionProvider.handlePaperworksReply();
    }

    if (message.includes('requirement')) {
      return this.actionProvider.handleRequirementsReply();
    }

    return this.actionProvider.handleUnkownKeywords();
  }
}

export default MessageParser;
