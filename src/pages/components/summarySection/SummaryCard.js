import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import DogIcon from '../icons/DogIcon';
import CatIcon from '../icons/CatIcon';
import PetParentIcon from '../icons/PetParentIcon';
import PetMatchIcon from '../icons/PetMatchIcon';

const SummaryCard = ({ summary }) => {
  const { ref, inView } = useInView();

  const props = useSpring({ count: inView ? summary.count : 0, config: { duration: 2000 } });

  const iconComponent = () => {
    switch (summary.name) {
      case 'dog':
        return <DogIcon />;
      case 'cat':
        return <CatIcon />;
      case 'petparent':
        return <PetParentIcon />;
      case 'match':
        return <PetMatchIcon />;
      default:
        return null;
    }
  };

  return (
    <div className='flex h-[200px] w-[227px] flex-col items-center rounded-lg bg-sky-300 py-4 px-2 text-center sm:w-full'>
      <div className='mb-6'>{iconComponent()}</div>
      <animated.p ref={ref} className='mb-[26px] text-2xl font-semibold text-navy-900'>
        {props.count.to((x) => new Intl.NumberFormat().format(Math.floor(x)))}
      </animated.p>
      <p className='font-medium text-brown-900'>{summary.title}</p>
    </div>
  );
};

export default SummaryCard;
