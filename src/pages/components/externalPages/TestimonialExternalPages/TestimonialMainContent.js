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
    <main className='text-brown-900 pb-[51px]'>
      {description.map((item, index) => {
        return (
          <div key={index}>
            {item.isH1Tag && (
              <h1 className='py-4 font-bold text-[40px] leading-none'>{item.text}</h1>
            )}
            {item.isH4Tag && (
              <h4 className='pt-4 text-xl font-semibold'>{item.text}</h4>
            )}
            {item.isH4PTag && <p className='pb-4 text-lg'>{item.text}</p>}
            {item.isPTag && <p className='py-4 text-lg'>{item.text}</p>}
            {item.isUlTag && (
              <ul className='list-disc pl-8 pb-4'>{listItem}</ul>
            )}
            {item.isImgTag && (
              <LazyLoadImage
                src={item.src}
                className='w-full object-cover object-top drop-shadow-md my-16'
                alt={`${altImage} content`}
              />
            )}
          </div>
        );
      })}
    </main>
  );
};

export default TestimonialMainContent;
