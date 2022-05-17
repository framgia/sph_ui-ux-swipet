import { Link } from 'react-router-dom';
import DownloadButton from '../../DownloadButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TestimonialHeaderContent = ({ item }) => {
  return (
    <figure className='relative pb-5 xl:h-[595px] lg:h-[572px] md:h-[550] sm:h-[450px] h-[572px]'>
      <LazyLoadImage
        src={item.src}
        className='object-cover lg:object-[center_-400px] md:object-top h-full w-full'
        alt={item.name}
      />
      <figcaption className='absolute left-0 right-0 bottom-5 bg-gradient-to-r from-orange-900 h-full'>
        <div className='pt-[64px] sm:pt-[38px] px-[20px] sm:px-[55px] lg:pt-[51px] lg:px-[100px] lg:h-[572px] xl:px-[200px] 2xl:px-[339px]'>
          <Link to='/'>
            <div className='w-[165px] h-[39px] sm:m-auto lg:w-[192px] lg:h-[48px] hover:cursor-pointer'>
              <LazyLoadImage src='/images/LogoMix.svg' alt='swipet logo' />
            </div>
          </Link>
          <div className='flex flex-col relative items-start'>
            <h1
              className='flex flex-col self-start sm:self-auto sm:flex-row lg:flex-col text-white text-[40px]
                      font-bold leading-[40px] pb-5 mt-[30px] lg:mt-[77px] lg:text-5xl lg:pb-4 2xl:text-[54px]'
            >
              {item.text}
            </h1>
            <h3
              className='leading-7 text-[64px] py-11 sm:text-center sm:py-[35px] 
                      lg:text-left lg:w-[400px] lg:pb-12 xl:w-[545px] xl:text-[64px] 2xl:w-[580px] text-yellow-900 font-allison'
            >
              {item.author}
            </h3>
            <div className='flex justify-center space-x-3 lg:space-x-4 pb-11'>
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
};

export default TestimonialHeaderContent;
