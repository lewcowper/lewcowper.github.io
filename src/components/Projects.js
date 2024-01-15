import Project from './Project';

import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiSpringboot,
  SiBootstrap,
  SiPython,
  SiPandas,
  SiScipy,
  SiFastapi,
  SiC,
  SiTailwindcss,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

import projectsData from '../../public/assets/data/projects.json';

const Projects = () => {
  return (
    <div className="flex justify-center text-neutral-700 my-4">
      <div className="flex flex-wrap md:flex-nowrap max-w-5xl justify-center w-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:mx-0">
          <div className="flex flex-col gap-4">
            <Project
              projectData={
                projectsData.filter(
                  (data) => data.title === 'Suite of predictive models'
                )[0]
              }
              langIcons={[<SiPython />, <SiJavascript />]}
              libFraIcons={[<SiPandas />, <SiScipy />]}
            />
            <Project
              projectData={
                projectsData.filter(
                  (data) => data.title === 'Meal Recommendation System'
                )[0]
              }
              langIcons={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
              libFraIcons={[<SiReact />, <SiBootstrap />]}
            />
            <Project
              projectData={
                projectsData.filter((data) => data.title === 'VC Compiler')[0]
              }
              langIcons={[<FaJava />]}
              libFraIcons={[]}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Project
              projectData={
                projectsData.filter(
                  (data) =>
                    data.title ===
                    'Alternative asset market data collator and viewer'
                )[0]
              }
              langIcons={[<SiPython />, <SiTypescript />, <SiHtml5 />]}
              libFraIcons={[<SiFastapi />, <SiReact />, <SiTailwindcss />]}
            />
            <Project
              projectData={
                projectsData.filter(
                  (data) => data.title === 'Personal Website'
                )[0]
              }
              langIcons={[<SiJavascript />, <SiHtml5 />]}
              libFraIcons={[<SiNextdotjs />, <SiReact />, <SiTailwindcss />]}
            />
            <Project
              projectData={
                projectsData.filter(
                  (data) => data.title === 'Simple Operating System (SOS)'
                )[0]
              }
              langIcons={[<SiC />]}
              libFraIcons={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
