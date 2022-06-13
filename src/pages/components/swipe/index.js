import Deck from './SwipeCard';
import { icons } from '../../../utilities/constants'
import styles from '../../../assets/css/styles.module.css';

export default function SwipeAnimation() {
  return (
    <>
      <div className='flex fill center select-none' >
        <img className={`absolute h-[507px] w-[267px] ${styles.noneDrag}`} src={icons[2]} alt='Mobile Phone' />
        <div className='relative overflow-hidden flex justify-center ml-[20.4px] mt-[58px] rounded-br-[19px] rounded-bl-[28px] h-[439px] w-[227px]' >
          <Deck icons={icons} />
        </div>
      </div>
    </>
  );
}
