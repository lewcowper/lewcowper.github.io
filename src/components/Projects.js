import Project from './Project';

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiSpringboot,
  SiBootstrap
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import {SiC, SiTailwindcss} from 'react-icons/si';

const Projects = () => {
  return (
    <div className="flex justify-center text-neutral-700">
      <div className="flex flex-wrap md:flex-nowrap max-w-5xl justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <Project title={"AOS"} langIcons={[<SiC />]} libFraIcons={[]}/>
          <Project title={"Info Tech Project"} langIcons={[<SiJavascript/>, <SiHtml5 />, <SiCss3 />]} libFraIcons={[<SiReact />, <SiBootstrap />]}/>
          <Project title={"Personal Website"} langIcons={[<SiJavascript/>, <SiHtml5 />]} libFraIcons={[<SiNextdotjs />, <SiReact />, <SiTailwindcss />]}/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
