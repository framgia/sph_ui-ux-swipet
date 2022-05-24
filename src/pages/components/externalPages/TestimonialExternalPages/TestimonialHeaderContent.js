import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import DownloadButton from '../../DownloadButton';

const TestimonialHeaderContent = ({ mode, item }) => (
  <figure className='relative h-[572px] pb-5 sm:h-[450px] md:h-[550] lg:h-[572px] xl:h-[595px]'>
    <LazyLoadImage
      src={item.src}
      className='h-full w-full object-cover md:object-top lg:object-[center_-400px]'
      alt={item.name}
    />
    <figcaption className='absolute left-0 right-0 bottom-5 h-full bg-gradient-to-r from-orange-900 dark:from-dark-ash-900'>
      <div className='h-[710px] px-5 pt-[4.8rem] sm:px-8 md:px-14 lg:h-[572px] xl:px-[200px] 2xl:px-[240px] 3xl:px-[320px]'>
        <Link to='/'>
          <div className='h-[39px] w-[165px] hover:cursor-pointer sm:m-auto lg:h-[48px] lg:w-[192px]'>
            <LazyLoadImage
              src={`${mode === 'light' ? '/images/LogoMix.svg' : '/images/LogoDarkTheme.svg'}`}
              alt='swipet logo'
            />
          </div>
        </Link>
        <div className='relative flex flex-col items-start'>
          <h1
            className='mt-[30px] flex flex-col self-start pb-5 text-[40px] font-bold leading-[40px]
                      text-white sm:flex-row sm:self-auto lg:mt-[45px] lg:flex-col lg:pb-4 lg:text-5xl xl:mt-[77px] 2xl:text-[54px]'
          >
            {item.text}
          </h1>
          <h3
            className='py-11 font-allison text-[64px] leading-7 text-yellow-900 dark:text-white
                      sm:py-[35px] sm:text-center lg:w-[400px] lg:pb-12 lg:text-left xl:w-[545px] xl:text-[64px] 2xl:w-[580px]'
          >
            {item.author}
          </h3>
          <div className='flex justify-center space-x-3 pb-11 lg:space-x-4'>
            <DownloadButton
              src='../images/GooglePlay.svg'
              alt='google play store'
              upperText='ANDROID APP ON'
              lowerText='Google Play'
              link='https://play.google.com/store'
            />
            <DownloadButton
              src='../images/AppStore.svg'
              alt='apple app store'
              upperText='DOWNLOAD ON THE'
              lowerText='App Store'
              link='https://www.apple.com/ph/app-store/'
            />
          </div>
        </div>
      </div>
    </figcaption>
  </figure>
);

export default TestimonialHeaderContent;
