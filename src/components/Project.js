import { useState } from 'react';

const Project = ({ projectData, langIcons, libFraIcons }) => {
  const [isShowingMore, setIsShowingMore] = useState(false);

  let id = 0;

  return (
    <div className={isShowingMore ? 'row-span-2' : ''}>
      <div className="py-2 px-4 bg-neutral-100 rounded-lg">
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
        <div>
          {isShowingMore && (
            <ul className='pt-2 list-disc pl-4'>
              {projectData.details.map((detail) => {
                return <li className="pb-2">{detail}</li>;
              })}
            </ul>
          )}
        </div>
        {isShowingMore && <p>Languages: {projectData.languages}.</p>}
        {isShowingMore && (
          <p>Frameworks/Libraries: {projectData.frameworksLibraries}.</p>
        )}
        <div className="flex justify-between py-2">
          <div className="flex gap-4">
            <div className="flex text-2xl sm:text-3xl gap-2">
              {langIcons.map((icon) => {
                return <div key={id++}>{icon}</div>;
              })}
            </div>
            <div className="flex text-2xl sm:text-3xl gap-2">
              {libFraIcons.map((icon) => {
                return <div key={id++}>{icon}</div>;
              })}
            </div>
          </div>
          <button
            className="hover:underline"
            onClick={() => setIsShowingMore(!isShowingMore)}
          >
            <div>{isShowingMore ? 'Show less' : 'Show more'}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
