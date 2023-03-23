import Image from 'next/image';

import self from '../../public/assets/images/self-s.jpg';

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='order-2 md:order-1'>
          <p>
            I'm Lewis Cowper, a software developer based in Sydney, Australia
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
        <div>
          <h3>Qualifications</h3>
          <ul>
            <li>BE (Mechanical), UNSW Sydney</li>
            <li>MIT (Computer Science), UNSW Sydney</li>
          </ul>
        </div>
        <div>
          <h3>Languages</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h3>Frameworks/Libraries</h3>
          <ul>
            <li>Spring Boot</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
