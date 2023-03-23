import Image from 'next/image';

import self from '../../public/assets/images/self-s.jpg';

import cardData from '../../public/assets/data/cards.json';
import Card from './Card';

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='order-2 md:order-1'>
          <p>
            I'm a software developer based in Sydney, Australia
            with experience in full-stack web development and operating system
            implementation.
          </p>
          <p>
            Prior to software development, I accumulated broad experience in
            project management, commercialisation and engineering roles in the
            renewable energy and construction industries.
          </p>
          <p>
            Outside of work, I enjoy reading, running and strength training.
          </p>
        </div>
        <div className='order-1 md:order-2'>
          <Image
            src={self}
            alt="self"
            priority={true}
            width={320}
            height={320}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {cardData.map((card) => {
          return (
            <Card card={card} />
          );
        })}
      </div>
    </>
  );
};

export default About;
