import { useState, useEffect } from 'react';
import runsData from '../../public/assets/data/runs.json';
import Run from './Run';

const mdBreakpoint = 768;

const Running = () => {
  const [runsArray, setRunsArray] = useState(
    window.innerWidth >= mdBreakpoint ? runsData.slice(0, -1) : runsData
  );

  const checkWindowSize = () => {
    if (window.innerWidth >= mdBreakpoint) {
      setRunsArray(runsData.slice(0, -1));
    } else {
      setRunsArray(runsData);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center text-neutral-700">
        <div className="flex flex-wrap md:flex-nowrap justify-center max-w-5xl">
          <p className="px-4 text-justify">
            Running is my favourite form of exercise and I enjoy training to
            improve my 5K and 10K times. When I can, I enjoy running along the
            Bondi to Coogee coastal track in Sydney. Here are some of my
            photographs of the scenic views along this track.
          </p>
        </div>
      </div>
      <div className="flex justify-center text-neutral-700">
        <div className="flex flex-wrap md:flex-nowrap justify-center max-w-5xl">
          <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-3 md:grid-rows-2 m-4">
            {runsArray.map((run) => {
              return <Run run={run} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Running;
