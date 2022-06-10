import Deck from './SwipeCard';
import { icons } from '../../../utilities/constants'

export default function SwipeAnimation() {
  return (
    <>
      <div className='flex fill center' >
        <img className='absolute h-[507px] w-[267px]' src={icons[2]} alt='' />
        <div className='relative overflow-hidden flex justify-center ml-[20.4px] mt-[58px] rounded-br-[19px] rounded-bl-[28px] h-[439px] w-[227px]' >
          <Deck icons={icons} />
        </div>
      </div>
    </>
  );
}
