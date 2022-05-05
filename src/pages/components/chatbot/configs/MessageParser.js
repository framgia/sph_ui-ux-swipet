class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();

    /*
        Alternate way to save the messages in the localstorage

        Downside:

        - will only save the messages when the user sends a message
        - the latest sent message will not be included in the saved messages
    */
    localStorage.setItem('chat_messages', JSON.stringify(this.state.messages));

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
