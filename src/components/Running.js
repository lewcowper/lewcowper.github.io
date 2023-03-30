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
    <div className="flex justify-center text-neutral-700">
      <div className="flex flex-wrap md:flex-nowrap justify-center max-w-5xl">
        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-3 md:grid-rows-2 m-4">
          {runsArray.map((run) => {
            return <Run run={run} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Running;
