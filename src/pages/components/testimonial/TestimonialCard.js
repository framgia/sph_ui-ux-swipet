import React from 'react';

const TestimonialCard = ({ item }) => {
  return (
    <figure className="relative px-5 pb-5">
      {/* Image */}
      <img
        className="object-cover w-full rounded-lg drop-shadow-md"
        src={item.src}
        alt={item.name}
      />
      {/* Content */}
      <figcaption className="absolute left-0 right-0 bottom-5 mx-5 pb-5 bg-gradient-to-t from-black rounded-lg text-white">
        <p className="mb-3 mx-5 font-semibold">{item.text}</p>
        <p className="mx-5 font-allison text-[32px]">{item.author}</p>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
