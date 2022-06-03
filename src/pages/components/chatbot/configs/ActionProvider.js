import i18next from 'i18next';

class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  addMessageToStateAndSave = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));

    const messages = JSON.parse(localStorage.getItem('chat_messages'));

    messages.push(message);

    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  showOptions = () => {
    const optionsMessage = this.createChatBotMessage(i18next.t('showOptions'), {
      withAvatar: true,
      delay: 300,
      widget: 'options',
    });

    this.addMessageToStateAndSave(optionsMessage);
  };

  handleUnkownKeywords = () => {
    const message = this.createChatBotMessage(i18next.t('handleUnkownKeywords'), {
      withAvatar: true,
      delay: 300,
      widget: 'options',
    });

    this.addMessageToStateAndSave(message);
  };

  handleAdoptionProcessReply = (event = false) => {
    if (event.type === 'click') {
      const userMessage = this.createClientMessage(i18next.t('adoptionProcess'));

      this.addMessageToStateAndSave(userMessage);
    }

    const botMmessage1 = this.createChatBotMessage(i18next.t('adoptionProcessReplyBot1'), {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });

    this.addMessageToStateAndSave(botMmessage1);

    const botMmessage2 = this.createChatBotMessage(i18next.t('adoptionProcessReplyBot2'), {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
      delay: 800,
      widget: 'process',
    });

    this.addMessageToStateAndSave(botMmessage2);

    const botMmessage3 = this.createChatBotMessage(i18next.t('adoptionProcessReplyBot3'), {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
      delay: 800,
    });

    this.addMessageToStateAndSave(botMmessage3);
  };

  handlePaperworksReply = (event = false) => {
    if (event.type === 'click') {
      const userMessage = this.createClientMessage(i18next.t('paperwork'));

      this.addMessageToStateAndSave(userMessage);
    }

    const botMmessage = this.createChatBotMessage(i18next.t('handlePaperworksReply'), {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });

    this.addMessageToStateAndSave(botMmessage);
  };

  handleRequirementsReply = (event = false) => {
    if (event.type === 'click') {
      const userMessage = this.createClientMessage(i18next.t('requirements'));

      this.addMessageToStateAndSave(userMessage);
    }

    const botMmessage = this.createChatBotMessage(i18next.t('handleRequirementsReply'), {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
      widget: 'requirements',
    });

    this.addMessageToStateAndSave(botMmessage);

    const followUp = this.createChatBotMessage(i18next.t('handleRequirementsReplyFollowUp'), {
      loading: true,
      terminateLoading: true,
      delay: 700,
      withAvatar: true,
    });

    this.addMessageToStateAndSave(followUp);
  };
}

export default ActionProvider;
