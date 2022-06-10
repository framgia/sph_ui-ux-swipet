import { useState } from "react";
import { useSprings, animated, to as interpolate, useSpring } from "@react-spring/web";
import { useDrag } from '@use-gesture/react';
import { images } from '../../../utilities/constants';
import styles from '../../../assets/css/styles.module.css'

const cards = images;

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  rot: 0,
  delay: i * 100,
});
const from = () => ({ x: 0, rot: 0 });

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number) => `rotateZ(${r}deg)`;

function Deck({ icons }) {
  const leftP = useSpring({ scale: 1 });
  const rightP = useSpring({ scale: 1 });

  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-staste, delta (current-pos - click-pos), direction and velocity
  const bind: any = useDrag(
    ({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {

      // If you flick hard enough it should trigger the card to fly out
      const trigger = vx > 0.2;

      // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      if (!active && trigger) gone.add(index);
      if (xDir === -1 && mx < 0) { leftP.scale.set(1.5) } else { leftP.scale.set(1) };

      if (xDir === 1 && mx > 0) { rightP.scale.set(1.5) } else { rightP.scale.set(1) };

      api.start((i) => {
        if (index !== i) return''; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);

        if (isGone && rightP.scale.set(1));
        if (isGone && leftP.scale.set(1));

        // When a card is gone it flys out left or right, otherwise goes back to zero
        let x;
        if (isGone) {
          x = 200 + window.innerWidth * xDir;
        } else {
          x = active ? mx : 0;
        }

        // How much the card tilts, flicking it harder makes it rotate faster
        const rot = mx / 20 + (isGone ? xDir * 10 * vx : 0);

        let tensionValue;

        if (active) {
          tensionValue = 800;
        } else {
          tensionValue = isGone ? 200 : 500
        }

        return {
          x,
          rot,
          delay: undefined,
          config: { friction: 50, tension: tensionValue },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    },
  );

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, rot }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate(rot, trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
      <div className='text-4xl mt-[384px] flex justify-between w-[339px] text-red-900 z-10 select-none'>
        <animated.div
          className='bg-no-repeat bg-center bg-[33px] h-[47px] w-[49px] ml-[12px] mb-[35px]'
          style={{ backgroundImage: `url(${icons[0]})`, scale: leftP.scale, backgroundSize: '43px' }}
        />
        <animated.div
          className='bg-no-repeat bg-center bg-[33px] h-[47px] w-[49px] mr-[12px] mb-[35px]'
          style={{ backgroundImage: `url(${icons[1]})`, scale: rightP.scale, backgroundSize: '43px' }}
        />
      </div>
    </>
  );
}

export default Deck;
