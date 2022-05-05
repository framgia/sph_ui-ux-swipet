import Options from './Options';

const GeneralOptions = (props) => {
  const options = [
    {
      name: 'Adoption Process',
      handler: props.actionProvider.handleAdoptionProcessReply,
      id: 2,
    },
    {
      name: 'Paperwork',
      handler: props.actionProvider.handlePaperworksReply,
      id: 3,
    },
    {
      name: 'Requirements',
      handler: props.actionProvider.handleRequirementsReply,
      id: 4,
    },
  ];
  return <Options options={options} {...props} />;
};

export default GeneralOptions;
