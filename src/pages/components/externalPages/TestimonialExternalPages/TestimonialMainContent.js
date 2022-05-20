import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TestimonialMainContent = ({ description, altImage }) => {
  const allUlTags = description.filter((list) => list.isUlTag === true);

  const allListText = allUlTags.map((list) => list.text);
  let listItem;
  for (let i = 0; i < allListText.length; i++) {
    listItem = allListText[i].map((list, index) => <li key={index}>{list}</li>);
  }
  return (
    <main className='pb-[51px] text-brown-900 dark:text-white'>
      {description.map((item, index) => (
        <div key={index}>
          {item.isH1Tag && <h1 className='py-4 text-[40px] font-bold leading-none'>{item.text}</h1>}
          {item.isH4Tag && <h4 className='pt-4 text-xl font-semibold'>{item.text}</h4>}
          {item.isH4PTag && <p className='pb-4 text-lg'>{item.text}</p>}
          {item.isPTag && <p className='py-4 text-lg'>{item.text}</p>}
          {item.isUlTag && <ul className='list-disc pl-8 pb-4'>{listItem}</ul>}
          {item.isImgTag && (
            <LazyLoadImage
              src={item.src}
              className='my-16 w-full object-cover object-top drop-shadow-md'
              alt={`${altImage} content`}
            />
          )}
        </div>
      ))}
    </main>
  );
};

export default TestimonialMainContent;
