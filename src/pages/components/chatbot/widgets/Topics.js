import i18next from 'i18next';
import Options from './Options';

const GeneralOptions = (props) => {
  const options = [
    {
      name: i18next.t('adoptionProcess'),
      handler: props.actionProvider.handleAdoptionProcessReply,
      id: 2,
    },
    {
      name: i18next.t('paperwork'),
      handler: props.actionProvider.handlePaperworksReply,
      id: 3,
    },
    {
      name: i18next.t('requirements'),
      handler: props.actionProvider.handleRequirementsReply,
      id: 4,
    },
  ];
  return <Options options={options} {...props} />;
};

export default GeneralOptions;
