import Image from 'next/image';

import self from '../../public/assets/images/self-s.jpg';

import cardData from '../../public/assets/data/cards.json';
import Card from './Card';

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap md:flex-nowrap max-w-5xl justify-center">
        <div className="order-2 md:order-1 p-4 grow-1">
          <p className='text-center sm:text-justify'>
            I'm a software developer based in Sydney, Australia with experience
            in full-stack web development and operating system implementation.
          </p>
          <div className="flex flex-wrap gap-4 justify-evenly p-4">
            {cardData.map((card) => {
              return <Card card={card} />;
            })}
          </div>
          <p className='text-center sm:text-justify mb-2'>
            Prior to software development, I accumulated broad experience in
            project management, commercialisation and engineering roles in the
            renewable energy and construction industries.
          </p>
          <p className='text-center sm:text-justify'>In my spare time, I enjoy reading and running.</p>
        </div>
        <div className="order-1 md:order-2 flex justify-center p-4 grow-0">
          <div className='min-w-max'>
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
      </div>
    </div>
  );
};

export default About;
