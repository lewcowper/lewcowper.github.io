import Image from 'next/image';

import self from '../../public/assets/images/self-s.jpg';

import softwareCardData from '../../public/assets/data/software-cards.json';
import SoftwareCard from './SoftwareCard';
import qualificationsCardData from '../../public/assets/data/qualifications-cards.json';
import QualificationsCard from './QualificationsCard';

const About = () => {
  let softwareCardId = 0;
  let qualificationsCardId = 0;

  return (
    <div className="flex justify-center text-neutral-700">
      <div className="flex flex-wrap md:flex-nowrap max-w-5xl justify-center">
        <div className="order-2 md:order-1 p-4 grow-1">
          <p className="text-center sm:text-justify">
            I'm a software developer based in Sydney, Australia with experience
            in full-stack web development and operating system implementation.
          </p>
          <div className="flex flex-wrap gap-4 justify-evenly p-4">
            {softwareCardData.map((card) => {
              return <SoftwareCard card={card} key={softwareCardId++}/>;
            })}
          </div>
          <p className="text-center sm:text-justify mb-2">
            Prior to software development, I accumulated broad experience in
            project management, commercialisation and engineering roles in the
            renewable energy and construction industries.
          </p>
          <div className="flex justify-center p-4">
            {qualificationsCardData.map((card) => {
              return <QualificationsCard card={card} key={qualificationsCardId++}/>;
            })}
          </div>
          <p className="text-center sm:text-justify mb-2">
            In my spare time, I enjoy reading and running.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center p-4 grow-0">
          <div className="min-w-max">
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
